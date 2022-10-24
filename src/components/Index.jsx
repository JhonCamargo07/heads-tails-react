import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
	return (
		<>
			<div className="d-flex justify-content-center m-auto align-items-center vh-100">
				<div className="card p-5">
					<div className="card-head text-center">
						<h1>HEADS OR TAILS</h1>
					</div>
					<div className="card-body">
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
						<div className="d-flex justify-content-center">
							<Link to="/game" className="btn btn-success px-4 py-3 fw-bold">
								Quiero intentarlo
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
