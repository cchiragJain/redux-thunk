import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUser = () => async (dispatch, getState) => {
	// the function fetchPosts needs to be dispatched as well
	// we are using the await keyword to wait for the request to get completed of fetchPosts
	await dispatch(fetchPosts());
	// the map function from lodash will make sure that we get back only the userId property from all the posts and the uniq function will find all the unique users from them
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	// notice how we are not using a await keyword in front of dispatch here since we don't have any other logic afterwards and don't have to wait for it
	userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: response.data,
	});
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({
		type: 'FETCH_USER',
		payload: response.data,
	});
};

/*
MEMOIZING SYNTAX
export const fetchUser = id => dispatch => {
	_fetchUser(id, dispatch);
};

we are creating a new function here since now it will be memoized and not created as a new function everytime the action creator gets called

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({
		type: 'FETCH_USER',
		payload: response.data,
	});
});
 
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
 */
