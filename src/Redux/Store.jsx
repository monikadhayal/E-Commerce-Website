import {configureStore} from '@reduxjs/toolkit'

const dummyReducer = (state = [], action) => state;

const store = configureStore({
  reducer: {
    handleCart: dummyReducer,
  },
});
export default store;