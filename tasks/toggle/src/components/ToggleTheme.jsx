import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const bg_prop = {
    background: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    minHeight: "100vh",
    minWidth: "100vw",
    display:"flex",
    flexDirection:"column",
    justifyContent:"Center",
    alignItems:"center"
  };

  const button_prop = {
    all: "unset",
    borderRadius: "3px",
    border:"1px hidden",
    borderRadius:"5px",
    padding:"5px",
    backgroundColor:isDarkMode?"#fff":"#190202ff",
    backdropFilter:"blur(100px)",
    opacity:"0.9",
    backgroundColor: isDarkMode ? "#444" : "#f0f0f0",
    color: isDarkMode ? "#fff" : "#963333ff",
    cursor: "pointer",
  };
  const flip = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div style={bg_prop}>
      <h1>This is {isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={flip} style={button_prop}>{isDarkMode ? "☀️" : "🌙"}</button>
    </div>
  );
};

export default ToggleTheme;
