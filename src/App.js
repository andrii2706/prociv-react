import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Users from './components/users/Users';
import axios from 'axios';


function App() {


	let carAxios = axios.create({
		baseURL: 'http://192.168.88.253/api/v1/cars',
	});

	useEffect(() => {

		carAxios().then(value => console.log(value.data));
	}, []);


	return (
		<Router>
			<div className="App">
				<button onClick={() => {

					carAxios.post('', {model: 'buburau', price: 100500, year: 2006});
				}}>save car
				</button>
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
