import Head from "next/head";
import styles from "./Layout.module.css";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

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
				<Image
					priority
					className={utilStyles.borderCircle}
					src="/images/profile.jpg"
					alt="Profile picture"
					width={144}
					height={144}
				/>
				<h1 className={utilStyles.header2X1}>{NAME}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}
