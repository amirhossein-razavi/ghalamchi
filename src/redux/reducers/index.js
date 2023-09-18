import { combineReducers } from 'redux';
import notification from './notification';
import loading from './loading';
import tasks from './tasks';

export default combineReducers({
  notification,
  loading,
  tasks,
});
