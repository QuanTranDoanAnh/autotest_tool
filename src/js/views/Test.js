import React from "react"
import { useParams } from "react-router-dom"
import TestUsersList from "../components/TestUsersList"
import TestMessagesList from "../components/TestMessagesList"
import ViewTitle from "../components/shared/ViewTitle"

// import BaseLayout from "../layouts/Base"
import { withBaseLayout } from "../layouts/Base"

function Test() {
	const { id } = useParams()
	return (
		<div className="row no-gutters fh">
			<div className="col-3 fh">
				<TestUsersList />
			</div>
			<div className="col-9 fh">
				<ViewTitle text={`Joined channel: ${id}`} />
				<TestMessagesList />
			</div>
		</div>
	)
}

export default withBaseLayout(Test, { canGoBack: true})
