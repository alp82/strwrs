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

const isLoading = createReducer(false, {
  [Types.SEARCH_REQUEST]: () => true,
  [Types.SEARCH_SUCCESS]: () => false,
  [Types.SEARCH_FAILURE]: () => false,
})

const error = createReducer('', {
  [Types.SEARCH_REQUEST]: () => null,
  [Types.SEARCH_SUCCESS]: () => null,
  [Types.SEARCH_FAILURE]: (state, { error }) => error,
})

const query = createReducer('', {
  [Types.SEARCH_REQUEST]: (state, { query }) => query,
})

const results = createReducer([], {
  [Types.SEARCH_SUCCESS]: (state, { results }) => results,
  [Types.SEARCH_FAILURE]: () => [],
})

const search = combineReducers({
  isLoading,
  error,
  query,
  results,
})

// all reducers combined

export default combineReducers({
  data,
  selection,
  search,
})
