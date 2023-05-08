import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit';
import {
  StateApp,
  actionsApp,
  reducerApp
} from './app';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const store = configureStore({
  reducer: {
    app: reducerApp
  }
});

type StoreType = {
  app: StateApp
}

export {
  actionsApp,
  store
};

export type {
  StoreType
};