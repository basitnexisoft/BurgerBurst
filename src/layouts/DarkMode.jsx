import React, { useState, useEffect } from 'react';
import darkPng from "../assets/img/moon.png";
import lightPng from "../assets/img/sun.jpeg";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const element = document.documentElement;

        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const changeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
             <img 
              src={theme === "light" ? darkPng : lightPng} 
              alt="img" 
              onClick={changeTheme}
              className="w-6 cursor-pointer" 
             />
        </div>
    );
};

export default DarkMode;

