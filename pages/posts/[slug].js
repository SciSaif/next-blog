import Head from "next/head";
// this file runs on the server
// so it runs node js, hence we can use all the node js features
import {getPost, getSlugs} from "../../lib/posts";

export async function getStaticPaths() {
	const slugs = await getSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: {slug},
		})),
		fallback: false,
	};
}

// only runs on server
export async function getStaticProps({params: {slug}}) {
	console.log("[first-post page] getStaticProps");

	// encapsulate the logic of fetching the data into a function stored in lib
	// we are only concerned with the data, not where or how the data is fetched
	const post = await getPost(slug);
	return {
		props: {post},
	};
}

function PostPage({post}) {
	return (
		<>
			<Head>
				<title>{post.title} - My Blog</title>
			</Head>
			<main>
				<p>{post.date}</p>
				<h1>{post.title}</h1>
				<article dangerouslySetInnerHTML={{__html: post.body}} />
			</main>
		</>
	);
}

export default PostPage;
