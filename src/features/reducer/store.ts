import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productSlice } from './slice/productSlice';

const productReducer = combineReducers({
  product: productSlice.reducer,
});

const store = configureStore({
  reducer: productReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
