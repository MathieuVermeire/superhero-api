import { Link, useParams } from "react-router-dom";
import FetchSuperheroes from "../components/FetchSuperheroes";
import styles from '../css/Detail.module.css'

const Detail = () => {
	let params = useParams();
	const { items, loaded } = FetchSuperheroes(params.superheroId);
	console.log(items, loaded);

	if(loaded) return (
		<article className={styles.content}>
			<Link to='/'>Back</Link>
			<h1>{items.name}</h1>
			<img src={items.image.url} alt={items.name} />
			<div className={styles.personalContainer}>
				<section className={styles.powerstats}>
					<h2>Powerstats</h2>
					<ul className={styles.menu}>
						{
							Object.entries(items.powerstats).map(([key, value], index) => {
									return (
										<li key={index} className={`${styles.item} ${styles.key}`}>
											<p className={styles.tag}>{key}</p>
											<p className={styles.value}>{value}</p>
										</li>
									)
								})
							}
					</ul>
				</section>
				<section className={styles.biography}>
					<h2>Biography</h2>
					<ul className={styles.menu}>
						{ loaded ?
							Object.entries(items.biography).map(([key, value], index) => {
									return (
										<li key={index} className={`${styles.item} ${styles.key}`}>
											<p className={styles.tag}>{key}</p>
											<p className={styles.value}>{value}</p>
										</li>
									)
								})
								:
								<></>
						}
					</ul>
				</section>
				<section className={styles.appearance}>
					<h2>Menu</h2>
					<ul className={styles.menu}>
						{ loaded ?
							Object.entries(items.appearance).map(([key, value], index) => {
									return (
										<li key={index} className={`${styles.item} ${styles.key}`}>
											<p className={styles.tag}>{key}</p>
											<p className={styles.value}>{value}</p>
										</li>
									)
								})
								:
								<></>
						}
					</ul>
				</section>
				<section className={styles.work}>
					<h2>Work</h2>
					<ul className={styles.menu}>
						{ loaded ?
							Object.entries(items.work).map(([key, value], index) => {
									return (
										<li key={index} className={`${styles.item} ${styles.key}`}>
											<p className={styles.tag}>{key}</p>
											<p className={styles.value}>{value}</p>
										</li>
									)
								})
								:
								<></>
						}
					</ul>
				</section>
				<section className={styles.connections}>
					<h2>Connections</h2>
					<ul className={styles.menu}>
						{ loaded ?
							Object.entries(items.connections).map(([key, value], index) => {
									return (
										<li key={index} className={`${styles.item} ${styles.key}`}>
											<p className={styles.tag}>{key}</p>
											<p className={styles.value}>{value}</p>
										</li>
									)
								})
								:
								<></>
						}
					</ul>
				</section>
			</div>
		</article>
	 );

	 return (
		<p>Loading</p>
	 );
}

export default Detail;
