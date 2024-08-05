import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
    name:"path",
    initialState:"RANDOM",
    reducers:{
        changePath:(state, action)=>{
            return action.payload;
        }
    }
});

export const { changePath} = pathSlice.actions;
export default pathSlice.reducer;