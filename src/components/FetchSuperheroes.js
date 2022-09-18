import { useEffect, useState } from "react";

//TER INFO -->
//tijdens het fetchen van de data van de supehero api kreeg ik telkens deze error

//Access to fetch at 'https://superheroapi.com/api/10225599895563153/search/fd'
//from origin 'http://localhost:3000' has been blocked by CORS policy:
//No 'Access-Control-Allow-Origin' header is present on the requested resource.
//If an opaque response serves your needs,
//set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

//ik heb alle methodes die ik probeerde laten staan in commentaar.
//Uiteindelijk lukte het door uit een superhero api & react voorbeeld een klein stukje toe te voegen aan de url
// namelijk de .php na api

const FetchSuperheroes = (searchValue) => {
	const [items, setitems] = useState([]);
	const [loaded, setLoaded] = useState(false);

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
		if(searchValue !== '') {
			fetch(`https://superheroapi.com/api.php/10225599895563153/${searchValue}`, {
				// origin: 'http://localhost:3000',
				// method: 'HEAD',
				// mode: 'cors'
				// headers: headers,
			})
			.then(res => {
					res.json().then(json => {
						if(json.response === 'success'){
								setLoaded(true);
								setitems(json);
						}
					})
				}
			)
			.catch((err) => {
				console.log(err.message);
			 });
		}
	},[searchValue])
	return {items, loaded}
}

export default FetchSuperheroes;
