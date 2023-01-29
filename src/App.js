import { Route, Routes } from 'react-router-dom';
import { Home, Login } from './pages';

export function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/home' element={<Home />} />
			<Route
				path='*'
				element={<h1 className='page-error'>Page is not Defined</h1>}
			/>
		</Routes>
	);
}
