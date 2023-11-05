import React from "react"

export default function TestMessagesList() {
	return (
		<div className="test-container">
			<ul className="test-box testContainerScroll">
				<li className="test-left">
					<div className="test-avatar">
						<img
							src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
							alt="Retail Admin"
						/>
						<div className="test-name">Test User 1</div>
					</div>
					<div className="test-text-wrapper">
						<span className="test-text">Some message 1</span>
						<span className="test-spacer"></span>
						<div className="test-hour">5h ago</div>
					</div>
				</li>
				<li className="test-right">
					<div className="test-avatar">
						<img
							src="https://i.dlpng.com/static/png/7105396_preview.png"
							alt="Retail Admin"
						/>
						<div className="test-name">Test User 2</div>
					</div>
					<div className="test-text-wrapper">
						<span className="test-text">Some message 2</span>
						<span className="test-spacer"></span>
						<div className="test-hour">5h ago</div>
					</div>
				</li>
				<li className="test-left">
					<div className="test-avatar">
						<img
							src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
							alt="Retail Admin"
						/>
						<div className="test-name">Test User 3</div>
					</div>
					<div className="test-text-wrapper">
						<span className="test-text">Some message 3</span>
						<span className="test-spacer"></span>
						<div className="test-hour">5h ago</div>
					</div>
				</li>
				<li className="test-right">
					<div className="test-avatar">
						<img
							src="https://i.dlpng.com/static/png/7105396_preview.png"
							alt="Retail Admin"
						/>
						<div className="test-name">Test User 4</div>
					</div>
					<div className="test-text-wrapper">
						<span className="test-text">Some message 4</span>
						<span className="test-spacer"></span>
						<div className="test-hour">5h ago</div>
					</div>
				</li>
			</ul>
		</div>
	)
}
