import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Home from './../pages/Home';

export default function Router() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route index element={<Home />} />
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/game" element={<Game />} />
					<Route
						path="*"
						element={() => (
							<>
								<h1>Error 404</h1> <a href="/">Volver</a>
							</>
						)}
					/>
				</Routes>
			</HashRouter>
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
		</>
	);
}
