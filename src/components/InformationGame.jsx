import React from 'react';

export default function InformationGame({ gamesPlayed, currentValue }) {
	return (
		<>
			<div className="d-flex justify-content-center align-items-center flex-column">
				<div className="d-flex justify-content-between">
					<p>Partidas jugadas</p>
					<p>{gamesPlayed}</p>
				</div>
				<div className="d-flex-justify-content-center align-items-center">
					$ {new Intl.NumberFormat().format(currentValue)}
				</div>
			</div>
		</>
	);
}
