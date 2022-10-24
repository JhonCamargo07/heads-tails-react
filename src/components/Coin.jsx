import React from 'react';

export default function coin({ sideCoin }) {
	return (
		<>
			<div className="col-md-5">
				<div className="d-flex justify-content-center">
					<img src={sideCoin} alt="Coin" className="img-fluid" />
				</div>
			</div>
		</>
	);
}
