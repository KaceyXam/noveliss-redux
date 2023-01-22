import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store"
import { HYDRATE } from "next-redux-wrapper";
import { shopItemType } from "./store";

const checkObject = (first: shopItemType, second: shopItemType) => {
  if (first.name === second.name && first.color === second.color && first.size === second.size) return true;
  return false;
}

const initialState: { list: shopItemType[] } = {
  list: [
    {
      name: "this is a test",
      quantity: 5,
      price: 50.0
    }
  ]
}

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<shopItemType>) => {
      if (state.list.some(v => checkObject(v, action.payload))) {
        return;
      };
      state.list = [...state.list, action.payload];
    },
    removeElement: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
    editQuantity: (state, action: PayloadAction<number[]>) => {
      let index = action.payload[0];
      let quantity = action.payload[1];
      state.list[index].quantity = quantity;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { addElement, removeElement, editQuantity } = storeSlice.actions;

export const selectedList = (state: AppState) => state.store.list;

export default storeSlice.reducer;