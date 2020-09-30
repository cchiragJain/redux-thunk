// maintain a list of post that we fetch from the JSONplaceholder api
// the first argument is going to be the state and it is whatever gets returned from this reducer the last time the reudcer ran
export default (state = [], action) => {
	// we generally use switch statements inside reducers
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}

	// if (action.type === 'FETCH_POSTS') {
	// 	return action.payload;
	// }

	// return state;
};
