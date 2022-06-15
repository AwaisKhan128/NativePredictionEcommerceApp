import { combineReducers } from 'redux';
import product from '../reducers/product';
import cart from './cart';
import alert from './alert';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reveiws from './review';
const reveiwReducerPersistanceConfig = {
	key: 'reveiwReducer',
	storage: AsyncStorage,
	whitelist: ['productReviews'],
};
export default combineReducers({
  alert,
  product,
  cart,
  review:persistReducer(reveiwReducerPersistanceConfig, reveiws),

});
