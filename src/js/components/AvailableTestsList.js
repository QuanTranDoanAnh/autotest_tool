import React from "react"

export default function AvailableTestsList({ tests }) {
	return (
		<div className="container-fluid">
			<div className="row mt-3">
				{false &&
					<div className="container-fluid">
						<div className="alert alert-warning">No tests to execute :(</div>
					</div>}
				{
					tests.map(test =>
					<div
						key={test.id}
						className="col-lg-3 col-md-6 mb-3">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{ test.name }</h5>
								<p className="card-text">{ test.description }</p>
								<button
									onClick={() => { }}
									className="btn btn-outline-primary">Execute a test</button>
							</div>
						</div>
					</div>

				)}
			</div>
		</div>
	)
}