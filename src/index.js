import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'

import Main from './app/Main'
import rootEpic from './store/epics'
import rootReducer from './store/reducers'
import './theme/default'

const epicMiddleware = createEpicMiddleware()

const middleware = [epicMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middleware))
)

epicMiddleware.run(rootEpic)

const App = (
  <Provider store={store}>
    <Main />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'))
