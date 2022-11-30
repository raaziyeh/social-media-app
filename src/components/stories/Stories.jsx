import AddIcon from "@mui/icons-material/Add"
import "./stories.scss"

// temporary
const stories = [
	{
		id: 1,
		name: "Joe Doe",
		img: "https://images.pexels.com/photos/14320969/pexels-photo-14320969.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	},
	{
		id: 2,
		name: "Joe Doe",
		img: "https://images.pexels.com/photos/14320969/pexels-photo-14320969.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	},
	{
		id: 3,
		name: "Joe Doe",
		img: "https://images.pexels.com/photos/14320969/pexels-photo-14320969.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	},
	{
		id: 4,
		name: "Joe Doe",
		img: "https://images.pexels.com/photos/14320969/pexels-photo-14320969.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	},
]
const Stories = () => {
	return (
		<div className="stories">
			<div className="user-story">
				<img
					src="https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
					alt="user-story"
				/>
				<button>
					<AddIcon className="add-icon" />
				</button>
				<span> Jane Doe</span>
			</div>
			{stories.map((story) => {
				return (
					<div className="story" key={story.id}>
						<img src={story.img} alt="story picture" />
						<span>{story.name}</span>
					</div>
				)
			})}
		</div>
	)
}

export default Stories
