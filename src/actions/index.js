import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({
		type: 'FETCH_POSTS',
		payload: response,
	});
};

/*
export const fetchPosts = async () => {
	will result in "Error: Actions must be plain objects. Use custom middleware for async actions."
	Refer to redux thunk - lecture 8 for explanation
	BAD APPROACH!!!
	const response = await jsonPlaceholder.get('/posts');

	return {
		type: 'FETCH_POSTS',
		payload: response,
	};

};
*/

/* 
	there are two types of action creators synchronous(instantly returns and dispatches an action with the data) and asynchronous(takes some time to load and dispatch the data) action creators
	In order to have async action creators we need to have a middleware(refer README.md file)  in our app like redux-thunk
*/
