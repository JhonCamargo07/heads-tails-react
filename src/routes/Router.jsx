import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Error404 from '../components/Error404';
import Footer from '../components/Footer';
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
			<Footer />
		</>
	);
}
