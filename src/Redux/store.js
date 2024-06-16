import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import cartReducer from './Cart/reducer';
import loginReducer from './Login/reducer';
import productReducer from './Products/reducer';
import adminReducer from './Admin/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './AppData/reducer';
import { deleteStoreReducer } from './Admin/DeleteProduct/reducer';


const rootReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
  appData:appReducer,
  products: productReducer,
  deleteApi:deleteStoreReducer,
  admin: adminReducer
})

const composed = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, composed);
