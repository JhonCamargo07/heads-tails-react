import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
	return (
		<>
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					{/* <div className="d-flex justify-content-center align-items-center vh-100"> */}
					<div className="card home border-1">
						<div className="card-head text-center">
							<h1 className="mt-3 display-4">HEADS OR TAILS</h1>
						</div>
						<div className="card-body d-flex align-items-center flex-column justify-content-center">
							<p>Hoy no podr&#225;s ganar, estoy seguro</p>
							<div className="d-flex justify-content-center">
								<Link to="/game" className="btn mb-3 my-2 btn-light btn-lg py-3 fw-bold">
									Quiero intentarlo
								</Link>
							</div>
							{/* </div> */}
						</div>
					</div>
				</div>
				<div className="col-md-2"></div>
			</div>
		</>
	);
}
