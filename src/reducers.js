import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.jsx';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  trendings: TrendingTopicsReducer
})

export default createRootReducer;