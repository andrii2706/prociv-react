import {useEffect, useState} from 'react';
import {getUsers} from '../../services/UserService';
import User from '../user/User';
import {Route, Switch} from 'react-router-dom';
import UserDetails from '../user-details/UserDetails';

export default function Users() {

	let [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers().then(value => setUsers([...value.data]));
	}, []);
	return (
		<div>
			{
				users.map(value => <User item={value}/>)

			}
			<hr/>

			<Switch>
				<Route path={'/users/:id'} component={UserDetails}/>

			</Switch>

		</div>
	);
}


