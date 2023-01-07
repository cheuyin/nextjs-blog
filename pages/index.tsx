import utilStyles from "../styles/utils.module.css";
import Layout from "./components/Layout";
import Head from "next/head";
import { getSortedPostsData } from "./lib/posts";
import { GetStaticProps } from "next";
import Date from "./components/date";

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();

	return {
		props: {
			allPostsData,
		},
	};
};

export default function Home({
	allPostsData,
}: {
	allPostsData: {
		id: string;
		title: string;
		date: string;
	}[];
}) {
	return (
		<Layout>
			<Head>
				<title>Stanley&apos;s Blog</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					I am Stanley Cheung, an up-and-coming full-stack software engineer.
				</p>
				<p>This site was built from the official Next.js tutorial.</p>
			</section>
			<section>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li key={id} className={utilStyles.listItem}>
							<p>{title}</p>
							<Date dateString={date}/>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
