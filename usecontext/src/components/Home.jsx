import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
        <button onClick ={toggleTheme}>Toggle</button>
        <span>{theme.toUpperCase()} MODE</span>
    </div>
  )
}

export default Home