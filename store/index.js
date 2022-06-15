import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;
