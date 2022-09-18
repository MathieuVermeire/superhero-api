import { Link, useParams } from "react-router-dom";
import FetchSuperheroes from "../components/FetchSuperheroes";
import styles from '../css/Detail.module.css'

const Detail = () => {
	let params = useParams();
	const { items, loaded } = FetchSuperheroes(params.superheroId);

	if(loaded) return (
		<main className={styles.main}>
			<Link className={styles.back} to='/'>
				<img src="img/arrow.svg" alt="arrow" />
				<p>Back</p>
			</Link>
			<article className={styles.superhero}>
				<img className={styles.superheroImage} src={items.image.url} alt={items.name} />
				<h1 className={styles.superheroTitle}>{items.name}</h1>
			</article>
			<article className={styles.content}>
				<div className={styles.personalContainer}>
					<section className={styles.powerstats}>
						<h2 className={styles.contentTitle}>Powerstats</h2>
						<ul className={styles.menu}>
							{
								Object.entries(items.powerstats).map(([key, value], index) => {
										return (
											<li key={index} className={`${styles.item} ${styles.itemPowerstats}`}>
												<p className={styles.tag}>{key}</p>
												<p className={`${styles.value} ${styles.valuePowerstats}`}>{value !== 'null' ? value : '-'}</p>
											</li>
										)
									})
								}
						</ul>
					</section>
					<section className={styles.biography}>
						<h2 className={styles.contentTitle}>Biography</h2>
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
						<h2 className={styles.contentTitle}>Menu</h2>
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
						<h2 className={styles.contentTitle}>Work</h2>
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
						<h2 className={styles.contentTitle}>Connections</h2>
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
		</main>
	 );

	 return (
		<p>Loading</p>
	 );
}

export default Detail;
