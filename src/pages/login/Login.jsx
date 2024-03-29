import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth"
import "./login.scss"
import LoginForm from "../../components/loginForm/LoginForm"

const Login = () => {
	const [formData, setFormData] = useState({ username: "", password: "" })
	const login = useContext(AuthContext).login
	const navigate = useNavigate()

	const changeHandler = (e) => {
		setFormData((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const submitHandler = (values) => {		
		login()
		navigate("/")
	}

	return (
		<main className="login">
			<div className="card">
				<div className="left">
					<h2>Hello World.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
					<span>Don't you have an account?</span>
					<Link to="/register">
						<button>Register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<LoginForm submitHandler={submitHandler} />
					<Link to="/register" className="tablet-only">
						<button>
							<span>No accounts yet? </span>
							<span>Sign up</span>
						</button>
					</Link>
				</div>
			</div>
		</main>
	)
}

export default Login
