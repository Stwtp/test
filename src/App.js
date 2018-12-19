import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configStore'
import Routes from './routes'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App