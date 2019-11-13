import { combineReducers } from 'redux';
import TrendingTopicsReducer from '../containers/TrendingTopicsContainer/reducer.jsx';
import CurrentUserReducer from '../containers/Auth/reducer.jsx';

const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer,
})

export default rootReducer;