import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: response.data,
	});
};

// notice how we are using fetchUser and not fetchUsers since we will only get the user which post it is from
export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({
		type: 'FETCH_USER',
		payload: response.data,
	});
};
