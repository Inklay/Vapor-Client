import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Store from './pages/Store'
import Header from './components/Header'

import './index.scss';

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
	<div className='app'>
		<Router>
			<Header/>
			<main>
				<Routes>
					<Route path='/store' element={<Store/>} />
				</Routes>
			</main>
		</Router>
	</div>
);
