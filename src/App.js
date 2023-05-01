// import './App.css'
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
	const { authIsReady, user } = useAuthContext();
	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route path={`/signup`}>
							{user && <Redirect to="/" />}
							{!user && <Signup />}
						</Route>
						<Route exact path={`/`}>
							{!user && <Redirect to="login" />}
							{user && <Home />}
						</Route>
						<Route path={`/login`}>
							{user && <Redirect to="/" />}
							{!user && <Login />}
						</Route>
					</Switch>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
