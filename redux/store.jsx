import { applyMiddleware, compose, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import reducer from './reducer'

let finalCreateStore = compose (
  applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState = { searchresults: [] }) {
  return finalCreateStore(reducer, initialState)
}
