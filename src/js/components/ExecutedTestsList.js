
import React from "react"
import TestSearch from "./TestSearch"
import { useNavigate } from "react-router-dom"

export default function ExecutedTestsList({ tests }) {
	const navigate = useNavigate()
	return (
		<div className="list-container">
			<TestSearch />
			<ul className="items">
				{
					tests.map(test =>
						<li
							key={test.id}
							onClick={() => { navigate(`/test/${test.id}`) }}
							className="item">
							<div className="item-status">
								<img src={test.image} alt="Test Admin" />
								<span className="status online"></span>
							</div>
							<p className="name-time">
								<span className="name mr-2">{ test.name }</span>
							</p>
						</li>
					)
				}
			</ul>
		</div>
	)
}