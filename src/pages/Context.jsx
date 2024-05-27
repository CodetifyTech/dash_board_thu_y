import { createContext, useEffect, useState } from "react";

const AppContext = createContext({
    isDarkMode: true,
    toggleThemeMode: () => {},
});
const AppProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState();
    useEffect(() => {
        const isDark = localStorage.getItem("isDarkMode");
        if (isDark == "true") {
            setIsDarkMode(true);
            document.body.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.body.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);
    const toggleThemeMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", (!isDarkMode).toString());
    };
    const value = { isDarkMode, setIsDarkMode, toggleThemeMode };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
