import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="left">
					<h1>Register</h1>
					<form>
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Surname" />
						<input type="email" placeholder="Email" />
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<button>Register</button>
					</form>
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
		</div>
	)
}

export default Register
