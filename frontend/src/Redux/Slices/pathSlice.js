import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
    name:"path",
    initialState:"CHRONOLOGICAL",
    reducers:{
        changePath:(state, action)=>{
            return action.payload;
        }
    }
});

export const { changePath} = pathSlice.actions;
export default pathSlice.reducer;