import PostContent from '../../components/posts/post-detail/post-content'

import { getPostData, getPostsFiles } from '../../lib/posts-util'

export default function PostDetailsPage({ post }) {
  return <PostContent post={post} />
}

export function getStaticProps(context: {params: any}) {
  const  { params } = context
  const { slug } = params

  const data = getPostData(slug)

  return {
    props: {
      post: data
    },
    revalidate: 600
  }
}

export function getStaticPaths() {

  const postFileNames = getPostsFiles()

  const slugs = postFileNames.map(el => el.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}