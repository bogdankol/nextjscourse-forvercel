import Head from 'next/head'

import Hero from '../components/homepage/Hero'
import FeaturedPosts from '../components/homepage/FeaturedPosts'
import { getFeaturedPosts } from '../lib/posts-util'

export default function HomePage({ posts }) {

	return (
		<>
			<Head>
				<title> welcome </title>
				<meta name='description' content='posts about programming' />
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	)
}

export async function getStaticProps() {
	const featuredPosts = getFeaturedPosts()

	console.log(1111111111111111111)
	console.log(process.env.DB_HOST)

	return {
		props: {
			posts: featuredPosts
		},
		revalidate: 60
	}
}
