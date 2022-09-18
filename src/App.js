import './reset.css';
import './App.css';
import styles from './css/Home.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import FetchSuperheroes from './components/FetchSuperheroes';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const { items, loaded } = FetchSuperheroes(searchValue);

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
		<main className={styles.main}>
			<div className={styles.search}>
				<img className={styles.searchIcon} src='img/looking-glass.svg' alt='looking-glass' />
				<input className={styles.searchField} onChange={handleSearch} type='text' placeholder='Search for heroes' name='searchfield' />
			</div>
			<></>
		</main>
	);


	if(!loaded) return (
		<main className={styles.main}>
			<div className={styles.search}>
				<img className={styles.searchIcon} src='img/looking-glass.svg' alt='looking-glass' />
				<input className={styles.searchField} onChange={handleSearch} type='text' placeholder='Search for heroes' name='searchfield' />
			</div>
			<p>loading</p>
		</main>
  );

	return (
		<main className={styles.main}>
			<div className={styles.search}>
				<img className={styles.searchIcon} src='img/looking-glass.svg' alt='looking-glass' />
				<input className={styles.searchField} onChange={handleSearch} type='text' placeholder='Search for heroes' name='searchfield' />
			</div>
				<ul className={styles.menu}>
					{items.results.map(item => (
						<li className={styles.item} key={item.id}>
							<Link to={`/${item.id}`}>
									<img className={styles.image} src={item.image.url} alt={`${item.name}`}  onError={(e) => {e.target.src = `img/fallback.png`}} />
								<p className={styles.itemName}>{item.name}</p>
							</Link>
						</li>
					))}
				</ul>
		</main>
	);
}

export default App;
