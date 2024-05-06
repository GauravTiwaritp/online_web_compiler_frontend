import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerStateType {
  html: string;
  css: string;
  javascript: string;
  CurrentLanguage: "html" | "css" | "javascript";
}

const InitialState: compilerStateType = {
  html: "",
  css: "",
  javascript: "",
  CurrentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState: InitialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerStateType["CurrentLanguage"]>
    ) => {
      state.CurrentLanguage = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage } = compilerSlice.actions;
