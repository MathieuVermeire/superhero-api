import './reset.css';
import './App.css';
import styles from './css/Home.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FetchSuperheroes from './components/FetchSuperheroes';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const { items, loaded } = FetchSuperheroes(searchValue);

	console.log(searchValue);

	console.log(items);

	const handleSearch = (e) => {
		setSearchValue(`search/${e.target.value}`);
	}


	let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Origin','http://localhost:3000');
		// headers.append('Access-Control-Allow-Origin', '*')
		headers.append("Access-Control-Allow-Origin", "*");
		headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	if(searchValue === 'search/' || searchValue === '') return (
		<>
			<input onChange={handleSearch} type='text' name='searchfield' />
			<></>
		</>
	);


	if(!loaded) return (
		<>
			<input onChange={handleSearch} type='text' name='searchfield' />
			<p>loading</p>
		</>
  );

	return (
		<>
			<input onChange={handleSearch} type='text' name='searchfield' />
				<ul className={styles.menu}>
					{items.results.map(item => (
						<li className={styles.item} key={item.id}>
							<Link to={`/${item.id}`}>
								<img className={styles.image} src={item.image.url} alt={`${item.name} - image`}  onError={(e) => {e.target.src = `img/fallback.png`}} />
								<p>{item.name}</p>
							</Link>
						</li>
					))}
				</ul>
		</>
	);
}

export default App;
