import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';

export default function Router() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</HashRouter>
		</>
	);
}
