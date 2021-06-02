import {useEffect, useState} from 'react';
import {getUserPosts} from '../../services/UserService';

export default function User({item}) {

	let [userPosts, setUserPosts] = useState([]);

	useEffect(() => {
		getUserPosts(item.id).then(value => setUserPosts([...value]));
	}, []);
	return (
		<div>
			{item.id} - {item.name}
			<div>
				<h3>posts here</h3>
			</div>
			{
				userPosts.map(post => <div>{post.id} - {post.title}</div>)
			}
			<hr/>
		</div>
	);
}
