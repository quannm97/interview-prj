import { persistStore } from 'redux-persist';
import { store } from './store';

const persistedStore = persistStore(store);

export default persistedStore