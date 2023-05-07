import LocationOnIcon from "@mui/icons-material/LocationOn"
import LanguageIcon from "@mui/icons-material/Language"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PinterestIcon from "@mui/icons-material/Pinterest"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"
import Posts from "../../components/posts/Posts.jsx"
import "./profile.scss"

const Profile = () => {
	return (
		<main className="profile">
			<div className="profile-header">
				<img
					className="cover"
					src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="scenery"
				/>
				<img
					className="header-avatar"
					src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="avatar"
				/>
			</div>
			<div className="profile-container">
				<div className="user-info">
					<div className="left">
						<a href="">
							<FacebookOutlinedIcon className="icon" />
						</a>
						<a href="">
							<InstagramIcon className="icon" />
						</a>
						<a href="">
							<TwitterIcon className="icon" />
						</a>
						<a href="">
							<LinkedInIcon className="icon" />
						</a>
						<a href="">
							<PinterestIcon className="icon" />
						</a>
					</div>
					<div className="center">
						<span className="name">Jane Doe</span>
						<div className="contact">
							<div className="location">
								<LocationOnIcon className="icon" />
								<span>USA</span>
							</div>
							<div className="web">
								<LanguageIcon className="icon" />
								<span>lamadev</span>
							</div>
						</div>
						<button>Follow</button>
					</div>
					<div className="right">
						<EmailOutlinedIcon className="icon" />
						<MoreVertOutlinedIcon className="icon" />
					</div>
				</div>
				<div className="user-posts">
					<Posts />
				</div>
			</div>
		</main>
	)
}

export default Profile
