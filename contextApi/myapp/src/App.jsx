import React, { useContext } from "react";
import Login from "./components/login";
import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
	const { user } = useAuth();
	console.log(user);
	return (
		<>
			<Profile />
			<Login />
		</>
	);
}

export default App;
