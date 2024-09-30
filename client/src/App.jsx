import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import CreatingListing from "./pages/CreatingListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./components/Search";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/about" element={<About />} />
				<Route path="/search" element={<Search />} />
				<Route path="/listing/:listingId" element={<Listing />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />} />
					<Route path="/create-listing" element={<CreatingListing />} />
					<Route
						path="/update-listing/:listingId"
						element={<UpdateListing />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
