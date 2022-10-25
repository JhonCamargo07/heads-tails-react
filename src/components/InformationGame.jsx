import React from 'react';

export default function InformationGame({ gamesPlayed, currentValue }) {
	return (
		<>
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<div className="card p-0 py-2">
						<div className="d-flex justify-content-evenly">
							<p>Partidas jugadas</p>
							<p>{gamesPlayed}</p>
						</div>
						<div className="d-flex-justify-content-center align-items-center">
							<p className="display-5 m-0">$ {new Intl.NumberFormat().format(currentValue)}</p>
						</div>
					</div>
				</div>
				<div className="col-md-3"></div>
			</div>
		</>
	);
}
