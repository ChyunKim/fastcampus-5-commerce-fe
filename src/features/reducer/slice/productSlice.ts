import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PRODUCTSLICE_PROPS {
  id: number;
  name: string;
  price: number;
  capacity: number;
  quantity: number;
}
const INITIAL_STATE: PRODUCTSLICE_PROPS = {
  id: 0,
  name: '',
  price: 0,
  capacity: 0,
  quantity: 1,
};
export const productSlice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,
  reducers: {
    infoProduct: (state, action: PayloadAction<PRODUCTSLICE_PROPS>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.capacity = action.payload.capacity;
    },
  },
});

export const { infoProduct } = productSlice.actions;
