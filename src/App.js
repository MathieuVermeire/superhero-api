import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
// import express from 'express';
// import cors from 'cors';

function App() {
	// const app = express();
	// app.use(cors({
	// 	origin: 'http://localhost:3000/',
	// }))
	const [items, setitems] = useState([]);
	const [loaded, setLoaded] = useState(false);

	console.log(loaded);

	let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Origin','http://localhost:3000');
		// headers.append('Access-Control-Allow-Origin', '*')
		headers.append("Access-Control-Allow-Origin", "*");
		headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	useEffect(() => {
		// const fetchHero = async() => {
		// 	const url = `https://superheroapi.com/api/10225599895563153/search/batman`;
		// 	const res = await fetch(url, {mode: 'no-cors'});
		// 	const data = await res.json();
		// 	if(data) {
		// 		console.log(data);
		// 	}
		// }

		// fetchHero();
		fetch('https://superheroapi.com/api.php/10225599895563153/search/batman', {
			// origin: 'http://localhost:3000',
			// method: 'HEAD',
			// mode: 'cors'
			// headers: headers,
		})
		.then(res => {
			setLoaded(true);
			res.json().then(json => {
				if(json.response === 'success'){
					setitems(json);
					setLoaded(false);
					console.log(json);
				}
			})
		}
		).catch((err) => {
			console.log(err.message);
	 });
	},[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
