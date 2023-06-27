import classes from './all-posts.module.css'
import PostGrid from './post-grid'

export default function AllPosts({ posts }) {
  return <section className={classes.posts}>
    <h1>All posts</h1>
    <PostGrid posts={posts} />
  </section>
}