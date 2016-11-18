import { combineReducers } from 'redux'
import categoryReducer from './category-reducer'
import productReducer from './product-reducer'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  categoryReducer,
  productReducer,
  routing: routerReducer
})

export default reducers
