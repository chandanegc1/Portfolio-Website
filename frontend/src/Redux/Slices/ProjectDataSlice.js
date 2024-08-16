import { createSlice } from "@reduxjs/toolkit";
import { arr1 } from "../../utils/constants";

const projectSlice = createSlice({
  name: "cart",
  initialState: arr1.sort((a,b)=> a.data.year.localeCompare(b.data.year)), 
  reducers: {
    sortItems: (state, action) => {
      switch (action.payload) {
        case 'CHRONOLOGICAL':
          state.sort((a, b) => a.data.year - b.data.year);
          break;
          case 'TYPOLOGY':
            state.sort((a, b) => a.data.category.localeCompare(b.data.category));
            break; 
        case 'STATUS':
          state.sort((a, b) => a.data.status.localeCompare(b.data.status));
          break; 
        // case 'TECHNOLOGY':  waiting for data to be added
        //   state.sort((a, b) => a.data.technology.localeCompare(b.data.technology));
        //   break; 
        case 'LOCATION':
          state.sort((a, b) => a.data.location.localeCompare(b.data.location));
          break;
        default:
          break;
      }
    },
  }
});

export const { sortItems} = projectSlice.actions;
export default projectSlice.reducer;
