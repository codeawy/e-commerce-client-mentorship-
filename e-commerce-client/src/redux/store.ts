import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {

  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
