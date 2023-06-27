import PostItem from './post-item'

import classes from './posts-grid.module.css'

export default function PostGrid({ posts }) {
  return <ul className={classes.grid}>
    {posts.map((post: any) => <PostItem key={post.slug} post={post} />)}
  </ul>
}