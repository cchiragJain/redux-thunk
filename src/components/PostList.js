import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

// we created a class based component because we wanted to make sure that we have access to life cycle methods in order to do data loading with redux
class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

// the first argument of the connect fucntion is always going to be mapStateToProps function
export default connect(mapStateToProps, { fetchPosts })(PostList);
