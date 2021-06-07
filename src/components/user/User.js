import React, {Component} from 'react';

class User extends Component {


	render() {

		let {item, children} = this.props;
		console.log(children);
		console.log(item);
		return (
			<div>
				{item.name} {children}

			</div>
		);
	}
}

export default User;
