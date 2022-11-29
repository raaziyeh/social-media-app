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
import "./navbar.scss"

function Navbar() {
	const toggleDarkMode = useToggleDarkMode()
	const darkMode = useDarkMode()

	return (
		<div className="navbar">
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
					<SearchOutlinedIcon className="icon" />
					<input type="text" placeholder="Search..." />
				</div>
			</div>
			<div className="right">
				<PersonOutlinedIcon className="icon" />
				<EmailOutlinedIcon className="icon" />
				<NotificationsNoneOutlinedIcon className="icon" />
				<div className="user">
					<img
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="avatar"
					/>
					<span>Jane Doe</span>
				</div>
			</div>
		</div>
	)
}

export default Navbar
