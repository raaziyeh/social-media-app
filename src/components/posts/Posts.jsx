import Post from "./post/Post"
import "./posts.scss"

// temporary
const posts = [
	{
		id: 1,
		name: "Joe Doe",
		userId: 1,
		profilePic:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
		img: "https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&w=600",
		comments: [
			{
				id: 1,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.`,
				img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
			},
			{
				id: 2,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et d`,
				img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
			},
		],
	},
	{
		id: 2,
		name: "Joe Doe",
		userId: 1,
		profilePic:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
		img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
		comments: [
			{
				id: 1,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.`,
				img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
			},
			{
				id: 2,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et d`,
				img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
			},
		],
	},
]

const Posts = () => {
	return (
		<div className="posts">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	)
}

export default Posts
