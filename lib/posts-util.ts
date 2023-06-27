import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts') 

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory)
}

export function getAllPosts() {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map(postFile => getPostData(postFile)).sort((a: any, b: any) => a.date - b.date)

  return allPosts
  
}

export function getPostData(postIdentifier: string) {
  const filePath = path.join(postsDirectory, `${postIdentifier.includes('.md') ? postIdentifier : `${postIdentifier}.md`}`)
  console.log({postIdentifier, filePath})
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  // removes file extension
  const postSlug = postIdentifier.replace(/\.md$/, '')

  const postData = {
    slug: postSlug,
    ...data,
    content
  }

  // console.log({fileContent, data, content, postSlug, postData})

  return postData
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()

  return allPosts.filter((post: any) => post.isFeatured)
}