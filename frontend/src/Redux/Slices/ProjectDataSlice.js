import { createSlice } from "@reduxjs/toolkit";
import { arr1 } from "../../utils/constants";

const projectSlice = createSlice({
  name: "cart",
  initialState: arr1.sort((a,b)=> a.data.location.localeCompare(b.data.location)), 
  reducers: {
    sortItems: (state, action) => {
      switch (action.payload) {
        case 'CHRONOLOGICAL':
          state.sort((a, b) => a.data.year - b.data.year);
          break;
        case 'STATUS':
          state.sort((a, b) => a.data.status.localeCompare(b.data.status));
          break; 
        case 'LOCATION':
          state.sort((a, b) => a.data.location.localeCompare(b.data.location));
          break;
        case 'LIST-VIEW':
          state.sort((a, b) => a.data.status.localeCompare(b.data.status));
          break;
        case 'RANDOM':
          state.sort((a, b) => a.data.location.localeCompare(b.data.location));
          break;
        default:
          state.sort((a, b) => a.data.location.localeCompare(b.data.location));
          break;
      }
    },
  }
});

export const { sortItems} = projectSlice.actions;
export default projectSlice.reducer;
