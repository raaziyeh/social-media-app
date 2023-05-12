import { Link, useNavigate } from "react-router-dom"
import SignupForm from "../../components/signupForm/SignupForm"
import "./register.scss"

const Register = () => {
	const navigate = useNavigate()
	const submitHandler = (values) => {
		navigate("/login")
	}

	return (
		<main className="register">
			<div className="card">
				<div className="left">
					<h1>Register</h1>
					<SignupForm submitHandler={submitHandler} />
					<Link to="/login" className="tablet-only">
						<button>
							<span>Have an account? </span>
							<span>Log in</span>
						</button>
					</Link>
				</div>
				<div className="right">
					<h2>Hello World.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation.
					</p>
					<span>Do you have an account?</span>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
			</div>
		</main>
		// <SignupForm />
	)
}

export default Register
