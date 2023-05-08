import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeBG } from "../model";

type StateApp = {
  theme: ThemeBG;
  lang: string
}

const initialStateApp: StateApp = {
  theme: ThemeBG.CONTRAST,
  lang: 'es'
};

const sliceApp = createSlice({
  name: 'app',
  initialState: initialStateApp,
  reducers: {
    changeTheme: (state: StateApp, { payload: theme }: PayloadAction<ThemeBG>) => {
      state.theme = theme;
    },
    changeLang: (state: StateApp, { payload: lang }: PayloadAction<string>) => {
      state.lang = lang;
    }
  }
});

const actionsApp = sliceApp.actions;
const reducerApp = sliceApp.reducer;

export {
  StateApp,
  actionsApp,
  reducerApp
};
