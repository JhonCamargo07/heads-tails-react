import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Error404 from '../components/Error404';
import Game from '../pages/Game';
import Home from './../pages/Home';

export default function Router() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/game" element={<Game />} />
					<Route path="/error404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
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
