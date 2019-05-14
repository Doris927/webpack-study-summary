import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as headerReducer } from 'pages/Header/store';
import { reducer as loginReducer } from 'pages/Login/store';
// import { reducer as tabReducer } from '../common/BottomBar/store';
// import { reducer as homeReducer } from '../common/Home/store';
// import { reducer as ordersReducer } from '../common/Order/store';

const rootReducer = history => combineReducers({
  header: headerReducer,
  login: loginReducer,
  router: connectRouter(history),
});

export default rootReducer;
