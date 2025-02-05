import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	signInStart,
	signInFailure,
	signInSuccess,
	resetError,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
	const [formData, setFormData] = useState({});
	const { loading, error } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				dispatch(resetError());
			}, 4000);
		}
	}, [error]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			dispatch(signInStart());
			const res = await fetch(
				`${import.meta.env.VITE_API_URL}/api/auth/signin`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			const data = await res.json();
			console.log(data);

			if (data.success === false) {
				dispatch(signInFailure(data.message));
				return;
			}

			dispatch(signInSuccess(data));
			setTimeout(() => {
				navigate("/");
			}, 1000);
		} catch (error) {
			setLoading(false);
			dispatch(signInFailure(error.message));
		}
	};
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="email"
					placeholder="email"
					className="border p-3 rounded-lg"
					id="email"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="password"
					className="border p-3 rounded-lg"
					id="password"
					onChange={handleChange}
				/>

				<button
					disabled={loading}
					className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
				>
					{loading ? "Loading..." : "Sign In"}
				</button>
				<OAuth />
			</form>

			{error && (
				<p className="text-red-600 flex justify-center mt-5">{error}</p>
			)}

			<div className="flex gap-2 mt-5 justify-center">
				<p>Don't have an account?</p>
				<Link to={"/sign-up"}>
					<span className="text-blue-700">Sign Up</span>
				</Link>
			</div>
		</div>
	);
}
