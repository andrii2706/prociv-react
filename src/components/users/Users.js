import {useEffect} from 'react';
import getUsers from '../../services/UserService';

export default function Users() {

	useEffect(() => {
		getUsers.then(value => console.log(value));
	}, []);
	return (
		<div>
			Users

		</div>
	);
}
