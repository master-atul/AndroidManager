import {
  combineReducers
} from 'redux';
import sample from './sample';
import devices from './devices';
import filemanager from './filemanager';
import settings from './settings';

import {
  routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
  sample,
  routing: routerReducer,
  devices,
  filemanager,
  settings
});

export default rootReducer;
