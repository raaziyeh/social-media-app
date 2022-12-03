import "./comments.scss"

const Comments = (props) => {
	return (
		<div className="comments">
			<div className="new-comment">
				<img
					src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="avatar"
				/>
				<form>
					<input type="text" placeholder="write a comment" />
					<button>Send</button>
				</form>
			</div>
			{props.comments.map((comment) => {
				return (
					<div className="comment" key={comment.id}>
						<img src={comment.img} alt="avatar" />
						<div>
							<span className="name">{comment.name}</span>
							<p className="comment-text">{comment.text}</p>
						</div>
						<span className="date">1 hour ago</span>
					</div>
				)
			})}
		</div>
	)
}

export default Comments
