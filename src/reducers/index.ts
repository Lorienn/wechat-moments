// 通过combineReducers将所有reducer聚集在一起
import { combineReducers } from 'redux'
import user from './user'

export default combineReducers({
  user
})