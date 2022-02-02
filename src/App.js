import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import Team from "./pages/team/team";
import Notfound from "./pages/404/notfound";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/services" component={Services}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/team" component={Team}/>
					<Route component={Notfound}/>
				</Switch>
			</Router>
		</div>
	)
}

export default App;
