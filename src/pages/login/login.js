import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

export const Login = () => {
	const navigateHome = useNavigate();
	const submit = (e) => {
		e.preventDefault();
		navigateHome('/home');
	};

	return (
		<div>
			<h1 className='register-title'>Sign Up to the React weather app</h1>
			<form onSubmit={submit}>
				<input type='email' placeholder='Type your email...' required />
				<input type='password' placeholder='Type your password...' required />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
