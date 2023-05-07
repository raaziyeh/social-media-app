import AddIcon from "@mui/icons-material/Add"
import "./stories.scss"

// temporary
const stories = [
	{
		id: 1,
		name: "Joe Doe",
		img: "/images/contact_story.jpeg",
	},
	{
		id: 2,
		name: "Joe Doe",
		img: "/images/contact_story.jpeg",
	},
	{
		id: 3,
		name: "Joe Doe",
		img: "/images/contact_story.jpeg",
	},
	{
		id: 4,
		name: "Joe Doe",
		img: "/images/contact_story.jpeg",
	},
]
const Stories = () => {
	return (
		<section className="stories">
			<div className="user-story">
				<img src="/images/user_story.jpeg" alt="user-story" />
				<button>
					<AddIcon className="add-icon" />
				</button>
				<span> Jane Doe</span>
			</div>
			<ul>
				{stories.map((story) => {
					return (
						<li className="story" key={story.id}>
							<img src={story.img} alt="story picture" />
							<span>{story.name}</span>
						</li>
					)
				})}
			</ul>
		</section>
	)
}

export default Stories
