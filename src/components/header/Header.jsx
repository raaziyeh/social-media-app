import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import { Link } from "react-router-dom"
import { useToggleDarkMode } from "../../context/theme"
import { useDarkMode } from "../../context/theme"
import "./header.scss"
import { useState } from "react"

function Header() {
	const [showSearchInput, setShowSearchInput] = useState(false)
	const toggleDarkMode = useToggleDarkMode()
	const darkMode = useDarkMode()

	return (
		<header className="navbar">
			<div className="left">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">ReactSocial</span>
				</Link>
				<HomeOutlinedIcon className="icon" />
				{!darkMode && (
					<DarkModeOutlinedIcon className="icon" onClick={toggleDarkMode} />
				)}
				{darkMode && (
					<LightModeOutlinedIcon className="icon" onClick={toggleDarkMode} />
				)}
				<GridViewOutlinedIcon className="icon" />
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
					<img
						src="/images/user_avatar.jpeg"
						alt="avatar"
					/>
					<span>Jane Doe</span>
				</div>
			</div>
		</header>
	)
}

export default Header
