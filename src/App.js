// import './App.css'
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
      <Navbar />
				<Switch>
					<Route  path={`/signup`}>
						<Signup />
					</Route>
					<Route exact path={`/`}>
						<Home />
					</Route>
					<Route path={`/login`}>
						<Login />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
