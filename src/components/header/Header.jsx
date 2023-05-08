import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import { Link } from "react-router-dom"
import { useToggleDarkMode } from "../../context/theme"
import { useDarkMode } from "../../context/theme"
import "./header.scss"
import { useState, useContext } from "react"
import { AuthContext } from "../../context/auth"

function Header() {
	const [showSearchInput, setShowSearchInput] = useState(false)
	const toggleDarkMode = useToggleDarkMode()
	const darkMode = useDarkMode()
	const currentUser = useContext(AuthContext).currentUser
	const logout = useContext(AuthContext).logout

	return (
		<header className="navbar">
			<div className="left">
				<div>
					<Link to="/" style={{ textDecoration: "none" }}>
						<span className="logo">ReactSocial</span>
					</Link>
				</div>

				<div className="icon">
					<HomeOutlinedIcon className="icon" />
				</div>
				<div className="icon logout-icon" data-hover="logout" onClick={logout}>
					<LogoutOutlinedIcon className="icon" />
				</div>
				<div className="icon theme-icon" data-hover="theme">
					{!darkMode && (
						<DarkModeOutlinedIcon className="icon" onClick={toggleDarkMode} />
					)}
					{darkMode && (
						<LightModeOutlinedIcon className="icon" onClick={toggleDarkMode} />
					)}
				</div>
				<div className="search">
					<SearchOutlinedIcon
						className="icon"
						onClick={() => setShowSearchInput((prev) => !prev)}
					/>
					<input
						type="text"
						placeholder="Search..."
						className="desktop-search"
					/>
					{showSearchInput && (
						<input
							type="text"
							placeholder="Search..."
							className="mobile-search"
						/>
					)}
				</div>
			</div>
			<div className="right">
				<nav>
					<ul>
						<li>
							<PersonOutlinedIcon className="icon" />
						</li>
						<li>
							<EmailOutlinedIcon className="icon" />
						</li>
						<li>
							<NotificationsNoneOutlinedIcon className="icon" />
						</li>
					</ul>
				</nav>
				<div className="user">
					<img src={currentUser.avatar} alt="avatar" />
					<span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
				</div>
			</div>
		</header>
	)
}

export default Header
