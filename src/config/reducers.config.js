import { combineReducers } from 'redux';
import TrendingTopicsReducer from '../containers/TrendingTopicsContainer/reducer';
import CurrentUserReducer from '../containers/Auth/reducer';

const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer,
})

export default rootReducer;