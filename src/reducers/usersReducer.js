// maintain a list of users
// since it will maintain a list of users we will default the state to an array
export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USER':
			// adding a new user
			return [...state, action.payload];
		default:
			return state;
	}
};
