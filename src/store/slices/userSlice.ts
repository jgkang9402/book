import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserInfoType {
  email: string;
  birth: string;
  uid: string;
  favoBook: string;
  myLikeBookList?: [];
  myReportList?: [];
}

interface UserSliceType {
  userInfo: UserInfoType | {};
}

const initialState: UserSliceType = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUserInfo: (state, action: PayloadAction<UserInfoType>) => {
      state.userInfo = action.payload;
    },
    handleMenuTab: (state, action: PayloadAction<number>) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initUserInfo, handleMenuTab } = userSlice.actions;

export default userSlice.reducer;
