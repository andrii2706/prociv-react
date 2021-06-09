import './App.css';
import {useEffect, useReducer, useState} from 'react';

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_USERS':
			state.users = action.payload;
			console.log(state);
			return {...state};
		case 'CHANGE_FLAG':
			state.flag = action.payload;
			return {...state};
		case 'CHANGE_THEME':
			state.theme = action.payload;
			return {...state};
		default:
			return {...state};
	}
}

export default function App() {

	// let [users, setUsers] = useState([]);
	// let [flag, setFLag] = useState(false);

	let [state, dispatch] = useReducer(reducer, {users: [], flag: false, theme: 'light'});
	let {users, flag, theme} = state;


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(value => {
				dispatch({type: 'ADD_USERS', payload: value});
				// setUsers([...value]);
			});
	}, []);

	let showFlag = () => {
		dispatch({type: 'CHANGE_FLAG', payload: !flag});
	};

	function changeTheme() {

		// if (theme === 'light') {
		// 	dispatch({type: 'CHANGE_THEME', payload: 'dark'});
		// } else {
		// 	dispatch({type: 'CHANGE_THEME', payload: 'light'});
		// }
		dispatch({type: 'CHANGE_THEME', payload: theme === 'light' ? 'dark' : 'light'});

	}

	return (
		<div className={theme}>
			<button onClick={changeTheme}>change color theme</button>
			<button onClick={showFlag}>show details of users</button>
			{
				users.map((user) =>
					<div>
						<div>{user.id} - {user.name}</div>

						{
							flag && <div>{user.email} - {user.username}</div>
						}

					</div>)
			}

		</div>
	);
}
