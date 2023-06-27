import Head from 'next/head'

import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../lib/posts-util'

export default function AllPostsPage({ posts }) {
  return <>
		<Head>
			<title>all posts</title>
      <meta name='description' content='all posts' />
		</Head>
		<AllPosts posts={posts} />
	</>
}

export async function getStaticProps() {
	return {
		props: {
			posts: getAllPosts()
		}
	}
}