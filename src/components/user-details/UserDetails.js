import {useEffect, useState} from 'react';
import {getUser} from '../../services/UserService';
//
// export default function UserDetails(props) {
// 	let {match: {params: {id}}} = props;
// 	console.log(id);
//
// 	let [user, setUser] = useState(null);
// 	useEffect(() => {
// 		getUser(id).then((value) => setUser(value.data));
// 	}, [id]);
// 	return (
// 		<div>
// 			{
// 				user && <div>{JSON.stringify(user)}</div>
// 			}
// 		</div>
// 	);
// }

export default function UserDetails(props) {

	let {history: {location: {state: {item}}}} = props;
	console.log(item);
	return (
		<div>
			{JSON.stringify(item)}
		</div>
	);
}
