import { createStore, combineReducers } from 'redux';
import { formulationReducer, baseReducer, concernReducer, concentrationReducer, volumeReducer, caseReducer, ItemReducer } from './reducers';

const rootReducer = combineReducers({
  item: ItemReducer,
  formulation: formulationReducer,
  base: baseReducer,
  concern: concernReducer,
  concentration: concentrationReducer,
  volume: volumeReducer,
  case: caseReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
