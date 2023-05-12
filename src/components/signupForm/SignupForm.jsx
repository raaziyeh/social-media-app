import { useFormik } from "formik"
import "./signupForm.scss"

const SignupForm = ({ submitHandler }) => {
	const validate = (values) => {
		const errors = {}

		if (!values.firstName) {
			errors.firstName = "required"
		}

		if (!values.lastName) {
			errors.lastName = "required"
		}

		if (!values.email) {
			errors.email = "required"
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address"
		}

		if (!values.username) {
			errors.username = "required"
		}

		if (!values.password) {
			errors.password = "required"
		} else if (values.password.length < 6 || values.password.length > 20) {
			errors.password = "Password length must be between 6 and 20 characters"
		}

		return errors
	}

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
		},
		validate,
		onSubmit: submitHandler,
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<input
					id="firstName"
					name="firstName"
					placeholder="First Name"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.firstName}
				/>
				{formik.touched.firstName && formik.errors.firstName ? (
					<div className="error">{formik.errors.firstName}</div>
				) : null}
			</div>

			<div>
				<input
					id="lastName"
					name="lastName"
					placeholder="Last Name"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lastName}
				/>
				{formik.touched.lastName && formik.errors.lastName ? (
					<div className="error">{formik.errors.lastName}</div>
				) : null}
			</div>
			<div>
				<input
					id="email"
					name="email"
					placeholder="Email Address"
					type="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error">{formik.errors.email}</div>
				) : null}
			</div>

			<div>
				<input
					id="username"
					name="username"
					placeholder="Username"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.username}
				/>
				{formik.touched.username && formik.errors.username ? (
					<div className="error">{formik.errors.username}</div>
				) : null}
			</div>

			<div>
				<input
					id="password"
					name="password"
					placeholder="Password"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error">{formik.errors.password}</div>
				) : null}
			</div>

			<button>Register</button>
		</form>
	)
}

export default SignupForm
