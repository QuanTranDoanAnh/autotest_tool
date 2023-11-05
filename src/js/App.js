import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import StoreProvider from "./store/StoreProvider"
import HomeView from "./views/Home"
import LoadingView from "./components/shared/LoadingView"
import SettingsView from "./views/Settings"
import TestView from "./views/Test"
import WelcomeView from "./views/Welcome"

import { listenToAuthChanges } from "./actions/auth"

import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate,
	Outlet,
} from "react-router-dom"

function AuthRoute({ children }) {
	const user = useSelector(({ auth }) => auth.user)
	if (!user) {
		return <Navigate to="/" replace />
	}
	return children ? children : <Outlet />
}

const ContentWrapper = ({ children }) => (
	<div className="content-wrapper">{children}</div>
)

function TestApp() {
	const dispatch = useDispatch()
	const isChecking = useSelector(({ auth }) => auth.isChecking)
	useEffect(() => {
		dispatch(listenToAuthChanges())
	}, [dispatch])
	if (isChecking) {
		return <LoadingView />
	}

	return (
		<Router>
			<ContentWrapper>
				<Routes>
					<Route path="/" element={<WelcomeView />} />
					<Route
						path="/home"
						element={
							<AuthRoute>
								<HomeView />
							</AuthRoute>
						}
					/>
					<Route
						path="/test/:id"
						element={
							<AuthRoute>
								<TestView />
							</AuthRoute>
						}
					/>
					<Route
						path="/settings"
						element={
							<AuthRoute>
								<SettingsView />
							</AuthRoute>
						}
					/>
				</Routes>
			</ContentWrapper>
		</Router>
	)
}

export default function App() {
	return (
		<StoreProvider>
			<TestApp />
		</StoreProvider>
	)
}
