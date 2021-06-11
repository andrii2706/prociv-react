import './App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from './components/users/Users';


function App() {

	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to={'/'}> home page</Link>
					</li>
					<li>
						<Link to={'/users'}> about page</Link>
					</li>
				</ul>
			</div>
			<Switch>


				<Route exact path={'/'} render={() => <div>home page</div>}/>
				<Route path={'/users'} render={() => {
					return <Users/>;
				}}/>
			</Switch>
		</Router>
	);
}

export default App;
