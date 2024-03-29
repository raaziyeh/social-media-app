import courses from "../../assets/images/courses.png"
import events from "../../assets/images/events.png"
import friends from "../../assets/images/friends.png"
import fund from "../../assets/images/fund.png"
import gallery from "../../assets/images/gallery.png"
import gaming from "../../assets/images/gaming.png"
import group from "../../assets/images/group.png"
import market from "../../assets/images/market.png"
import memories from "../../assets/images/memories.png"
import messages from "../../assets/images/messages.png"
import tutorials from "../../assets/images/tutorials.png"
import videos from "../../assets/images/videos.png"
import watch from "../../assets/images/watch.png"
import { useContext } from "react"
import { AuthContext } from "../../context/auth"

import "./leftBar.scss"

function LeftBar() {
	const currentUser = useContext(AuthContext).currentUser
	return (
		<nav className="left-bar">
			<div className="container">
				<section className="main">
					<ul>
						<li className="item user">
							<img src={currentUser.avatar} alt="user" />
							<span>{`${currentUser.firstName}`}</span>
						</li>
						<li className="item">
							<img src={friends} alt="friends" />
							<span>Friends</span>
						</li>
						<li className="item">
							<img src={group} alt="group" />
							<span>Group</span>
						</li>
						<li className="item">
							<img src={market} alt="market" />
							<span>Market</span>
						</li>
						<li className="item">
							<img src={watch} alt="watch" />
							<span>Watch</span>
						</li>
						<li className="item">
							<img src={memories} alt="memories" />
							<span>Memories</span>
						</li>
					</ul>
				</section>
				<section className="shortcuts">
					<h4>Your shortcuts</h4>
					<ul>
						<li className="item">
							<img src={events} alt="events" />
							<span>Events</span>
						</li>
						<li className="item">
							<img src={gaming} alt="gaming" />
							<span>Gaming</span>
						</li>
						<li className="item">
							<img src={gallery} alt="gallery" />
							<span>Gallery</span>
						</li>
						<li className="item">
							<img src={videos} alt="videos" />
							<span>Videos</span>
						</li>
						<li className="item">
							<img src={messages} alt="messages" />
							<span>Messages</span>
						</li>
					</ul>
				</section>
				<section className="others">
					<h4>Others</h4>
					<ul>
						<li className="item">
							<img src={fund} alt="fund" />
							<span>Fundraiser</span>
						</li>
						<li className="item">
							<img src={tutorials} alt="tutorials" />
							<span>Tutorials</span>
						</li>
						<li className="item">
							<img src={courses} alt="courses" />
							<span>Courses</span>
						</li>
					</ul>
				</section>
			</div>
		</nav>
	)
}

export default LeftBar
