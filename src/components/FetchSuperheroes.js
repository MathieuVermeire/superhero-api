import { useEffect, useState } from "react";

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
