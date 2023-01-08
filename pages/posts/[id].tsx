import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Date from "../components/Date";

export default function Post({
	postData,
}: {
	postData: {
		id: string;
		contentHtml: string;
		title: string;
		date: string;
	};
}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingX1}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date}></Date>
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
			</article>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params?.id as string);
	return {
		props: {
			postData,
		},
	};
};
