import React from "react"
import ReactDOM from "react-dom/client"
import DarkModeProvider from "./context/theme"
import AuthContextProvider from "./context/auth"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<DarkModeProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</DarkModeProvider>
	</React.StrictMode>
)
