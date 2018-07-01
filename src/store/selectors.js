// data selectors
export const getInitializing = state => state.data.initializing
export const getFilms = state => state.data.films
export const getPoster = (state, id) => state.data.posters[id]

// selection
export const getSelection = state =>
  state.selection ? state.data.films[state.selection] : null

// search selectors
export const getSearchSort = state => state.search.sort
export const getSearchQuery = state => state.search.query
export const getSearchResults = state => state.search.results.map(id => getFilms(state)[id])
