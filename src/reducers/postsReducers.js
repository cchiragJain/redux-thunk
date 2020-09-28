// maintain a list of post that we fetch from the JSONplaceholder api
export default (state = [], action) => {
	// we are generally going to use switch statements inside reducers
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
