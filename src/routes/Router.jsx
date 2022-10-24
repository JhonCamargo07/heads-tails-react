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
		</>
	);
}
