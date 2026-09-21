import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import AreaPage from './Pages/AreaPage/AreaPage';

//Styles
import './global/global.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:slug" element={<AreaPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
