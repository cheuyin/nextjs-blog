import styles from "./layout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const name = "Stanley Cheung";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link
					rel="icon"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt=""
						/>
						<h1 className={utilStyles.heading2X1}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.colorInherit}>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">Back to home</Link>
				</div>
			)}
		</div>
	);
}
