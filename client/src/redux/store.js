import { configureStore } from '@reduxjs/toolkit'
 import  userReducer  from './user/userSlice'
 import themeReducer from './themes/themeSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});