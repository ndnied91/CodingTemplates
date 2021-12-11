import {combineReducers} from 'redux'

import test from './test'
import internal from './internal'
import external from './external'

import user from './user'

export default combineReducers({
  test : test,
  internal: internal,
  external: external,
  user: user
})
