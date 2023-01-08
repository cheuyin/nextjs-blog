import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf-8");
		const matterResult = matter(fileContents);
		return {
			id,
			...(matterResult.data as { title: string; date: string }),
		};
	});

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

// Returns an array of post IDs that can be used as path names for getStaticPaths
export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);
	const paths = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");
		return {
			params: {
				id,
			},
		};
	});
	return paths;
}

export async function getPostData(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf-8");
	const matterResult = matter(fileContents);
	const processedContent = await remark()
		.use(remarkHtml)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
