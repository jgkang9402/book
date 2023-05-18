import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BookSliceType {
  curPage: number;
  menuTabTarget: number;
}

const initialState: BookSliceType = {
  curPage: 1,
  menuTabTarget: 0,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    handleCurPage: (state, action: PayloadAction<number>) => {
      console.log("@@@2action", action);
      state.curPage = action.payload;
    },
    handleMenuTab: (state, action: PayloadAction<number>) => {
      state.menuTabTarget = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleCurPage, handleMenuTab } = bookSlice.actions;

export default bookSlice.reducer;
