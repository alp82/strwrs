import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions(
  {
    initRequest: [],
    initSuccess: ['films'],
    initFailure: ['error'],
    savePosters: ['posters'],
    select: ['film'],
    sort: ['by'],
    search: ['query'],
    setResults: ['results'],
  },
  {}
)
