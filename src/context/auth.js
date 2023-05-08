import { useState, createContext } from "react"

const AuthContext = createContext({
	currentUser: {},
	isLoggedIn: false,
	login: () => {},
	logout: () => {},
})

const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const login = () => setIsLoggedIn(true)

	const logout = () => setIsLoggedIn(false)

	// temporary
	const currentUser = {
		firstName: "Jane",
		lastName: "Doe",
		avatar: "/images/user_avatar.jpeg",
	}

	const contextValue = {
		isLoggedIn,
		login,
		logout,
		currentUser,
	}

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	)
}

export { AuthContext }
export default AuthContextProvider
