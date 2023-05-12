import { useFormik } from "formik"
import "./loginForm.scss"

export default function LoginForm({ submitHandler }) {
	const validate = (values) => {
		const errors = {}

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
			username: "",
			password: "",
		},
		validate,
		onSubmit: submitHandler,
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<div></div>
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
			<button>Login</button>
		</form>
	)
}
