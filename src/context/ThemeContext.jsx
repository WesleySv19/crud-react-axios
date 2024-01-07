import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isLightMode, setLightMode] = useState(false)

    const toggleTheme = () => {
        setLightMode((prevMode) => !prevMode)
    }

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
