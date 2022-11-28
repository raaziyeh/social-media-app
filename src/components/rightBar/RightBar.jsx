import "./rightBar.scss"

function RightBar() {
	return (
		<div className="right-bar">
			<div className="container">
				<div className="right-bar-section">
					<span>Suggestions For You</span>
					<ul>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<span>Joe Doe</span>
							</div>
							<div className="actions">
								<button>follow</button>
								<button>dismiss</button>
							</div>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<span>Joe Doe</span>
							</div>
							<div className="actions">
								<button>follow</button>
								<button>dismiss</button>
							</div>
						</li>
					</ul>
				</div>
				<div className="right-bar-section">
					<span>Latest Activities</span>
					<ul>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<span>Joe Doe</span>
								<span className="detail">changed their cover picture</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<span>Joe Doe</span>
								<span className="detail">liked a post</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<span>Joe Doe</span>
								<span className="detail">liked a comment</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<span>Joe Doe</span>
								<span className="detail">posted</span>
							</div>
							<span className="date">1 min ago</span>
						</li>
					</ul>
				</div>
				<div className="right-bar-section">
					<span>Online Friends</span>
					<ul>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
						<li>
							<div className="item">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="avatar"
								/>
								<div className="green-online" />
								<span>Joe Doe</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RightBar
