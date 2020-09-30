import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: response.data,
	});
};

// MEMOIZING SYNTAX
export const fetchUser = id => dispatch => {
	_fetchUser(id, dispatch);
};

// we are creating a new function here since now it will be memoized and not created as a new function everytime the action creator gets called
const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({
		type: 'FETCH_USER',
		payload: response.data,
	});
});

/* 
this also does not work since we everytime a new function is created whenever this action creator is called by redux-thunk
export const fetchUser = function (id) {
	return _.memoize(async function (dispatch) {
		const response = await jsonPlaceholder.get(`/users/${id}`);

		dispatch({
			type: 'FETCH_USER',
			payload: response.data,
		});
	});
};
 */ // notice how we are using fetchUser and not fetchUsers since we will only get the user which post it is from
