import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  categoryReducer,
  productReducer,
  routing: routerReducer
})

export default reducers
