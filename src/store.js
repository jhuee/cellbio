import { createStore, combineReducers } from 'redux';
import { formulationReducer, baseReducer, concernReducer, concentrationReducer, volumeReducer, caseReducer, ItemReducer, nameReducer } from './reducers';

const rootReducer = combineReducers({
  item: ItemReducer,
  formulation: formulationReducer,
  base: baseReducer,
  concern: concernReducer,
  concentration: concentrationReducer,
  volume: volumeReducer,
  case: caseReducer,
  name: nameReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
