import { createStore, combineReducers } from 'redux';
import { formulationReducer, baseReducer, concernReducer, concentrationReducer, volumeReducer, caseReducer, ItemReducer, nameReducer, extraReducer, priceReducer } from './reducers';

const rootReducer = combineReducers({
  item: ItemReducer,
  formulation: formulationReducer,
  base: baseReducer,
  concern: concernReducer,
  concentration: concentrationReducer,
  volume: volumeReducer,
  case: caseReducer,
  name: nameReducer,
  extra: extraReducer,
  price: priceReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
