import { useState } from "react";
import { ProjectData as Context, MyContext } from "./ContexApi";
import { arr1 as project } from "../utils/constants";


export const ItemProvider = ({children})=>{
    const [navPath, setNavPath] = useState('CHRONOLOGICAL');
    switch (navPath) {
        case 'CHRONOLOGICAL':
            project.sort((a,b) => b.data.year - a.data.year);
            break;
        case 'STATUS':
            project.sort((a,b) => a.data.status.localeCompare(b.data.status));
            break;
        case 'LOCATION':
            project.sort((a,b) => a.data.location.localeCompare(b.data.location));
            break;
        case 'LIST-VIEW':
            project.sort((a,b) => a.data.status.localeCompare(b.data.status));
            break;
        default:
            project.sort((a,b) => b.data.year - a.data.year);
            break;
    }
    return (
        <Context.Provider value={{project , navPath, setNavPath}}>
           {children}
        </Context.Provider>
    )
}

