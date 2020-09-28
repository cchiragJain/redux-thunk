import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

// we created a class based component because we wanted to make sure that we have access to life cycle methods in order to do data loading with redux
class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return <div>PostList</div>;
	}
}

// the first argument of the connect fucntion is always going to be mapStateToProps function
export default connect(null, { fetchPosts })(PostList);
