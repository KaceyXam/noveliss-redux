import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { storeSlice } from "./storeSlice";
import { createWrapper } from "next-redux-wrapper";

export interface shopItemType {
  name: string,
  quantity: number;
  price: number;
  color?: string;
  size?: string;
}

const makeStore = () =>
  configureStore({
    reducer: {
      [storeSlice.name]: storeSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);