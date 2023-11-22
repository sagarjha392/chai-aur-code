import { useContext } from "react";
import { createContext } from "react";


export const ThemeContext= createContext({
    thememode: "light",
    darktheme : ()=>{},
    lighttheme : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}