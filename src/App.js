import './App.css';
import {useEffect, useState} from 'react';
import User from './components/user/User';

function App() {

	let [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(value => {
				setUsers(value);
			});

	}, []);


	return (
		<div className="App">
			{
				users.map((user, index) => <User key={index} item={user}/>)
			}
			<hr/>

		</div>
	);
}

export default App;
