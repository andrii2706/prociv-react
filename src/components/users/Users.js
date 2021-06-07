import React, {Component} from 'react';
import UserService from '../services/UserService';
import User from '../user/User';

class Users extends Component {
	api = new UserService();

	// useSate = [users,setUsers]
	state = {users: []};

	// useEffect
	async componentDidMount() {
		let users = await this.api.getUsers();
		this.setState({users});
	}


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{
					this.state.users.map(value => <User
						item={value}
						key={value.id}> {value.id}</User>)

				}

			</div>
		);
	}
}

export default Users;
