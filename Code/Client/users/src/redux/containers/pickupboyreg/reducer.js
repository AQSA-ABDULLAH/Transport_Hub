import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    email: "",
    name:"",
    city:"",
  },
  reducers: {
    chooseEmail: (state, action) => { state.email = action.payload },
    chooseName: (state, action) => { state.name = action.payload },
    chooseCity: (state, action) => { state.city = action.payload },
    
  }
})

export const reducer = rootSlice.reducer;

export const {chooseEmail,chooseName ,chooseCity} = rootSlice.actions;
