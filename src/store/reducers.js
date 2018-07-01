import { combineReducers } from 'redux'
import { createReducer } from 'reduxsauce'

import { Types } from './actions'

// data reducers

const initializing = createReducer(false, {
  [Types.INIT_REQUEST]: () => true,
  [Types.INIT_SUCCESS]: () => false,
  [Types.INIT_FAILURE]: () => false,
})

const films = createReducer(
  {},
  {
    [Types.INIT_SUCCESS]: (state, { films }) =>
      // convert array-like structure to objects with film id's as key
      films.reduce(
        (acc, film) => ({
          ...acc,
          [film.id]: film,
        }),
        {}
      ),
    [Types.INIT_FAILURE]: () => [],
  }
)

const posters = createReducer(
  {},
  {
    [Types.SAVE_POSTERS]: (state, { posters }) => posters,
  }
)

const data = combineReducers({
  initializing,
  films,
  posters,
})

// selection reducers

const selection = createReducer(false, {
  [Types.SELECT]: (state, { film }) => film.id,
})

// search reducers

const sort = createReducer('episode', {
  [Types.SORT]: (state, { by }) => by,
})

const query = createReducer('', {
  [Types.SEARCH]: (state, { query }) => query,
})

const results = createReducer([], {
  [Types.SET_RESULTS]: (state, { results }) => results,
})

const search = combineReducers({
  sort,
  query,
  results,
})

// all reducers combined

export default combineReducers({
  data,
  selection,
  search,
})
