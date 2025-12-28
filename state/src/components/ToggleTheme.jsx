import React, { useState } from 'react'

const ToggleTheme = () => {
    const [isDarkMode , setIsDarkMode] = useState (false);
    const changeTheme = ()=>
    {
        setIsDarkMode(!isDarkMode)
    }
    const ThemeStyle = {
        backgroundColor : isDarkMode?'#333':'#fff',
        color : isDarkMode?'#fff':'#333',
        minHeight:"100vh"
    }
  return (

    <div style={ThemeStyle} >
        <h3>{isDarkMode? 'Dark mode':'Light mode'}</h3>
        <button onClick={changeTheme} style={{cursor:"pointer"}}>{isDarkMode ? "switch to light mode" : "switch to dark mode" }</button>
    </div>
  )
}

export default ToggleTheme