import Head from "next/head";
import styles from "./Layout.module.css";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const NAME = "Stanley Cheung";
// const SITE_TITLE = "Stanley's Blog";

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							className={utilStyles.borderCircle}
							src="/images/profile.jpg"
							alt="Profile picture"
							width={144}
							height={144}
						/>
						<h1 className={utilStyles.header2X1}>{NAME}</h1>
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
							/>{" "}
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.colorInherit}>
								{NAME}
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
