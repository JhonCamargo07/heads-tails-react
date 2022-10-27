import React from 'react';

export default function Footer() {
	document.oncontextmenu = () => {
		return false;
	};
	return (
		<footer className="background">
			<div className="container">
				<div className="d-flex justify-content-around flex-wrap">
					<p>
						Hecho por:{' '}
						<a target="_blank" href="http://jhoncamargo.000webhostapp.com/">
							Jhon Camargo
						</a>
					</p>
					<p>Todos los derechos reservados | &#169; 2022</p>
				</div>
			</div>
		</footer>
	);
}
