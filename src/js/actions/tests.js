import * as api from '../api/tests'

// export function fetchTests() {
// 	return async function (dispatch) {
// 		const tests = await api.fetchTests()
// 		debugger
// 		dispatch({
// 			type: 'TESTS_FETCH_SUCCESS',
// 			tests
// 		})

// 		return tests
// 	}
// }

export const fetchTests = () => dispatch => 
	api
		.fetchTests()
		.then(tests => dispatch({
			type: 'TESTS_FETCH_SUCCESS',
			tests
		}))