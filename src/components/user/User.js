import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter,
	useLocation,
	useHistory
} from 'react-router-dom';

function User(props) {

	let {item, match: {url}} = props;
	return (
		<div>
			{item.name} -
			<Link to={
				{pathname: url + '/' + item.id, state: {item}}
			}>user deatsil</Link>
		</div>
	);
}

export default withRouter(User);
// export default User;

