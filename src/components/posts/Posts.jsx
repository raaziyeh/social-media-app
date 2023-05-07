import PostItem from "./postItem/PostItem"
import "./posts.scss"

// temporary
const posts = [
	{
		id: 1,
		name: "Joe Doe",
		userId: 1,
		profilePic: "/images/contact_avatar.jpeg",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
		img: "/images/post_1.jpeg",
		comments: [
			{
				id: 1,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.`,
				img: "/images/contact_avatar.jpeg",
			},
			{
				id: 2,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et d`,
				img: "/images/contact_avatar.jpeg",
			},
		],
	},
	{
		id: 2,
		name: "Joe Doe",
		userId: 1,
		profilePic: "/images/contact_avatar.jpeg",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
		img: "/images/post_2.jpeg",
		comments: [
			{
				id: 1,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.`,
				img: "/images/contact_avatar.jpeg",
			},
			{
				id: 2,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et d`,
				img: "/images/contact_avatar.jpeg",
			},
		],
	},
	{
		id: 3,
		name: "Joe Doe",
		userId: 1,
		profilePic: "/images/contact_avatar.jpeg",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
		img: "/images/post_1.jpeg",
		comments: [
			{
				id: 1,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.`,
				img: "/images/contact_avatar.jpeg",
			},
			{
				id: 2,
				postId: 1,
				name: "John Doe",
				text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et d`,
				img: "/images/contact_avatar.jpeg",
			},
		],
	},
]

const Posts = () => {
	return (
		<section className="posts">
			<ul>
				{posts.map((post) => (
					<PostItem post={post} key={post.id} />
				))}
			</ul>
		</section>
	)
}

export default Posts
