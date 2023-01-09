import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

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
		date: string;
		title: string;
	}[];
}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="text-lg">
				<p>
					I am Stanley Cheung, an up-and-coming full-stack software engineer.
				</p>
				<p>This site was built from the official Next.js tutorial.</p>
			</section>

			<section className="text-lg">
				<h2 className="text-xl mt-5 mb-3 font-bold">Blog</h2>
				<ul>
					{allPostsData.map(({ id, date, title }) => (
						<li className="mb-3" key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className="text-gray-400 font-thin">
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
