import React, { useEffect } from "react"
import ExecutedTestsList from "../components/ExecutedTestsList"
import AvailableTestsList from "../components/AvailableTestsList"
import ViewTitle from "../components/shared/ViewTitle"

import { useDispatch, useSelector } from "react-redux"
import { fetchTests } from "../actions/tests"

import { withBaseLayout } from "../layouts/Base"

function Home() {
	const dispatch = useDispatch()
	const tests = useSelector(({ tests }) => tests.items)

	useEffect(() => {
		dispatch(fetchTests())
	}, [dispatch])

	return (
		<div className="row no-gutters fh">
			<div className="col-3 fh">
				<ExecutedTestsList tests={tests} />
			</div>
			<div className="col-9 fh">
				<ViewTitle text="Choose a test" />
				<AvailableTestsList tests={tests} />
			</div>
		</div>
	)

}

export default withBaseLayout(Home)
