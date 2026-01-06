import React, { createContext , useState} from 'react'
export const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState("light")

    const toggleTheme =()=>setTheme(theme==="light"?"light":"dark")

  return (
    <ThemeContext.Provider value ={{theme , toggleTheme}}>
        {children}
        <button onClick={toggleTheme}>Toggle</button>

    </ThemeContext.Provider>
  )
}

export default ThemeProvider