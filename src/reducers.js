import { combineReducers } from 'redux'
import { reducer }  from './feature'
import config from './config'

export default combineReducers({
  [config.name]: reducer
})