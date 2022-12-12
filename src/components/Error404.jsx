import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
	return (
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8">
				<div className="card home border-1">
					<div className="card-head text-center">
						<h1 className="mt-3 display-4">404</h1>
					</div>
					<div className="card-body d-flex align-items-center flex-column justify-content-center">
						<p>P&#225;gina no encontrada</p>
						<div className="d-flex justify-content-center">
							<Link to="/" className="btn mb-3 my-2 btn-light btn-lg py-3 fw-bold">
								Quiero volver
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-2"></div>
		</div>
	);
}
