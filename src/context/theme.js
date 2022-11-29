import { createContext, useState, useContext, useEffect } from "react"

const DarkModeContext = createContext({
	darkMode: false,
	toggleDarkMode: () => {},
})

const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(() =>
		JSON.parse(localStorage.getItem("darkMode"))
	)

	useEffect(() => {
		localStorage.setItem("darkMode", darkMode)
	}, [darkMode])

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode)
	}

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	)
}

export const useDarkMode = () => {
	return useContext(DarkModeContext).darkMode
}

export const useToggleDarkMode = () => {
	return useContext(DarkModeContext).toggleDarkMode
}

export default DarkModeProvider
