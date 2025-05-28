import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import GeneralPost from "./Components/GeneralPost";
import Hero from "./Components/Hero";
import Create from "./Components/Create";
import Login from "./Components/Login";
import Header from "./Components/Header";

import "./App.css";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { UserProvider } from "./ContextProvider/UserContext";

// for Pages with regular header
const HeaderLayout = () => (
	<>
		<Header />
		<Outlet />
	</>
);

const router = createBrowserRouter([
	{
		path: "/",
		loader: () => ({message: "Hello routing"}),
		element: <Hero />,
	},
	{
		element: <HeaderLayout />, // Header included
		children: [
			{
				path: "/create",
				element: <Create />,
			},
			{
				path: "/login",
				element: (
					<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
						<Login />
					</GoogleOAuthProvider>
				),
			},
			{
				path: "/posts",
				element: <GeneralPost />,
				children: [
					{
						path: "trending",
						element: <GeneralPost />,
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	);
}


export default App;
