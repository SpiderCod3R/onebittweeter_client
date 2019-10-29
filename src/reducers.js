import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.jsx';

const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer
});

export default rootReducer;