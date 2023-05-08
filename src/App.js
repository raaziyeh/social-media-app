import { useContext } from "react"
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Header from "./components/header/Header"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { useDarkMode } from "./context/theme"
import { AuthContext } from "./context/auth"

import "./style.css"
import "./app.scss"

const Layout = () => {
	const darkMode = useDarkMode()

	return (
		<div className={darkMode ? "dark" : "light"}>
			<Header />
			<div style={{ display: "flex" }}>
				<LeftBar />
				<div className="outlet">
					<Outlet />
				</div>
				<RightBar />
			</div>
		</div>
	)
}

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = useContext(AuthContext).isLoggedIn
	if (!isLoggedIn) {
		return <Navigate to="/login" />
	}
	return children
}

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<Layout />
			</ProtectedRoute>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/profile/:id",
				element: <Profile />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
])

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
