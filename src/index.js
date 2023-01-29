import { Container } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#app-box'));
root.render(
	<BrowserRouter>
		<Container>
			<App />
		</Container>
	</BrowserRouter>
);
