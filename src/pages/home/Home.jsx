import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import "./home.scss"

const Home = () => {
	return (
		<main className="home">
			<Stories />
			<Posts />
		</main>
	)
}

export default Home
