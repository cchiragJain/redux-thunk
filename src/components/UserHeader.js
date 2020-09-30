import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
	render() {
		const { user } = this.props;
		if (!user) {
			return null;
		}

		return <div className="header">{user.name}</div>;
	}
}

// in order to increase reusability we generally extract all the logic like here getting the current user to a seperate file in order to be able to reuse the mapStateToProps function so we extract all the logic in here and declare it in a seperate file
const mapStateToProps = (state, ownProps) => {
	// we can access the props part of the userHeader component using the ownProps argument that is available on mapStateToProps
	return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
