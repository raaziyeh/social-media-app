import "./rightBar.scss"

function RightBar() {
	return (
		<aside className="right-bar">
			<div className="container">
				<section className="right-bar-section">
					<h3>Suggestions For You</h3>
					<ul>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<span>Joe Doe</span>
							</div>
							<div className="actions">
								<button>follow</button>
								<button>dismiss</button>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<span>Joe Doe</span>
							</div>
							<div className="actions">
								<button>follow</button>
								<button>dismiss</button>
							</div>
						</li>
					</ul>
				</section>
				<section className="right-bar-section">
					<h3>Latest Activities</h3>
					<ul>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<span>Joe Doe</span>
								<span className="detail">changed their cover picture</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<span>Joe Doe</span>
								<span className="detail">liked a post</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<span>Joe Doe</span>
								<span className="detail">liked a comment</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<span>Joe Doe</span>
								<span className="detail">posted</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
					</ul>
				</section>
				<section className="right-bar-section">
					<h3>Online Friends</h3>
					<ul>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img src="/images/contact_avatar.jpeg" alt="avatar" />
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</aside>
	)
}

export default RightBar
