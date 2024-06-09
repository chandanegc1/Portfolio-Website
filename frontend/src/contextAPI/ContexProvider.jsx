import { useState } from "react";
import { MyContext } from "./ContexApi";

export const ItemProvider = ({children})=>{
    const [item , setItem] = useState('CHRONOLOGICAL');
    return (
        <MyContext.Provider value={{item , setItem}}>
           {children}
        </MyContext.Provider>
    )
}
