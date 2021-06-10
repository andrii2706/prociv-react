import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

export default function About(props) {

	let {match: {url}} = props;
	console.log(url);
	return (
		<div>
			<ul>
				<li><Link to={url + '/main'}>main her</Link></li>
				<li><Link to={url + '/submain'}>sub main her</Link></li>
			</ul>

			<Switch>
				<Route path={url + '/main'} render={() => <div>main</div>}/>
				<Route path={url + '/submain'} render={() => <div>sub main</div>}/>

			</Switch>

		</div>
	);
}
