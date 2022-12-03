import "./share.scss"
import Image from "../../assets/images/gallery.png"
import Location from "../../assets/images/location.png"
import Friend from "../../assets/images/friends.png"

const Share = () => {
	return (
		<div className="share">
			<div className="container">
				<div className="top">
					<img
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="avatar"
					/>
					<input type="text" placeholder="What's on your mind Jane?" />
				</div>
				<hr />
				<div className="bottom">
					<div className="left">
						<input type="file" id="file" style={{ display: "none" }} />
						<label htmlFor="file">
							<div className="item">
								<img src={Image} alt="image-icon" />
								<span>Add Image</span>
							</div>
						</label>
						<div className="item">
							<img src={Location} alt="location-icon" />
							<span>Add Place</span>
						</div>
						<div className="item">
							<img src={Friend} alt="friends-icon" />
							<span>Tag Friends</span>
						</div>
					</div>
					<div className="right">
						<button>Share</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Share
