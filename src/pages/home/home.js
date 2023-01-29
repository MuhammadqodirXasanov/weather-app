import React from 'react';
import axios from 'axios';
import './home.css';

export const Home = () => {
	const [data, setData] = React.useState('');
	const [location, setLocation] = React.useState('');
	const [errorData, setError] = React.useState('');

	const options = {
		method: 'GET',
		url: 'https://weatherapi-com.p.rapidapi.com/current.json',
		params: { q: location },
		headers: {
			'X-RapidAPI-Key': '3b13812722mshfd844f6d59cce87p196fe3jsn1a9b0e84e442',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		},
	};

	const submit = (e) => {
		e.preventDefault();

		axios
			.request(options)
			.then((response) => {
				setData(response.data);

				if (response.data.current.condition.text === 'Mist')
					document.body.className = 'mist';
				else if (response.data.current.condition.text === 'Partly cloudy')
					document.body.className = 'partCloudy';
				else if (response.data.current.condition.text === 'Clear')
					document.body.className = 'clearNature';
				else if (response.data.current.condition.text === 'Sunny')
					document.body.className = 'sunnyNat';
				else if (response.data.current.condition.text === 'Overcast')
					document.body.className = 'Overcast';
				else if (response.data.current.condition.text === 'Heavy snow')
					document.body.className = 'heavy-snow';
				else if (response.data.current.condition.text === 'Moderate rain')
					document.body.className = 'moderate-rain';
				else if (response.data.current.condition.text === 'Fog')
					document.body.className = 'fog';
				else if (response.data.current.condition.text === 'Patchy light snow')
					document.body.className = 'Patchy-light-snow';
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<>
			<h1 className='curent'>Current Weather</h1>
			<form onSubmit={submit}>
				<input
					className='inp'
					placeholder='Enter your region...'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button>Submit</button>
			</form>
			<div>{errorData ? errorData.message : ''}</div>
			{data && (
				<div className='flex'>
					<div>
						<div className='row'>
							<h1 className='weather-event'> {data.current.condition.text}</h1>
							<h1 className='gradus'>{data.current.temp_c} C</h1>
							<img
								className='weather-icon'
								src={data.current.condition.icon}
								alt='weather icon'
							/>
						</div>

						<p className='botom'>
							<span className='title'>Humidity: </span>
							{data.current.humidity}%
						</p>
						<p className='botom'>
							<span className='title'>Wind Speed: </span>
							{data.current.wind_kph} km/s
						</p>
						<p className='country botom'>
							<span className='title'>Location: </span> {data.location.country}{' '}
							/ {data.location.region}
						</p>
						<p className='last-update botom'>
							<span className='title'>Last Updated: </span>
							{data.current.last_updated}
						</p>
					</div>
				</div>
			)}
		</>
	);
};
