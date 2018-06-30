import { of, forkJoin } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { combineEpics, ofType } from 'redux-observable'
import { map, mergeMap } from 'rxjs/operators'

import { Creators, Types } from './actions'

// on application startup load all films
const loadFilms = action$ =>
  action$.pipe(
    ofType(Types.INIT_REQUEST),
    mergeMap(() =>
      ajax
        .getJSON('https://star-wars-api.herokuapp.com/films')
        .pipe(map(response => Creators.initSuccess(response)))
    )
  )

// after we got the films load all poster image urls
const loadPosters = action$ =>
  action$.pipe(
    ofType(Types.INIT_SUCCESS),
    mergeMap(({ films }) =>
      forkJoin(
        films.map(film =>
          ajax
            .getJSON(
              `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${
                film.fields.title
              }`
            )
            .pipe(map(response => ({ film, response })))
        )
      )
    ),
    mergeMap(data => {
      const posters = data.reduce(
        (acc, { film, response }) => ({
          ...acc,
          [film.id]: `http://image.tmdb.org/t/p/w500/${
            response.results[0].poster_path
          }`,
        }),
        {}
      )
      return of(Creators.savePosters(posters))
    })
  )

export default combineEpics(loadFilms, loadPosters)
