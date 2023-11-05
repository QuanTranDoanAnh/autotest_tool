
const DEFAULT_STATE = {
	items: []
}

export default function testReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case 'TESTS_FETCH_SUCCESS':
			return { items: action.tests }
		default:
			return state
	}
}