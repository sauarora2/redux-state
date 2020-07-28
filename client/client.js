import App from '../components/App'
import { Provider } from 'react-redux'
import React from 'react'
import configureStore from '../redux/store'
import { render } from 'react-dom'

let initialState = {
  searchresults: [{
    "url": "https://github.com/",
    "source": "Source",
    "title": "Title",
    "lastModified": "2020-07-28T06:58:34.130Z",
    "summary": "Summary",
    "description": "Description"
  }]
}
let store = configureStore(initialState)
render(
<Provider store={store}>
<App/>
</Provider>,

  document.getElementById('app')
)
