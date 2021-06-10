import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import About from './components/about/About';


function App() {

	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to={'/'}> home page</Link>
					</li>
					<li>
						<Link to={'/proNas2'}> about page</Link>
					</li>
				</ul>
			</div>
			<Switch>
				{/*<Route path={'/about'}>*/}
				{/*	<About/>*/}
				{/*</Route>*/}
				{/*<Route path={'/about'} component={About}/>*/}

				<Route exact path={'/'} render={() => <div>home page</div>}/>
				<Route path={'/proNas2'} render={(props) => {
					console.log(props);
					return <About {...props}/>;
				}}/>
			</Switch>
		</Router>
	);
}

export default App;
