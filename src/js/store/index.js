import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk'
import testReducer from '../reducers/tests'
import authReducer from '../reducers/auth';

export default function configureStore() {

	const middlewares = [
		thunkMiddleware
	]

	const store = legacy_createStore(
		combineReducers({
			tests: testReducer,
      auth: authReducer
		}), applyMiddleware(...middlewares))

	return store
}