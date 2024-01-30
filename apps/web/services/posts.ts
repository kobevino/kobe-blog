import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter'
import { join } from 'path'

export interface IPost {
  slug: string
  title: string
  date: string
  subTitle: string
  tag: string
}

export async function getPosts() {
  const POSTS_DIR_PATH = join(process.cwd(), '/posts/')
  const dirEntries = await readdir(POSTS_DIR_PATH, {
    withFileTypes: true,
  })

  const postPromises = dirEntries
    .filter(entry => entry.isDirectory())
    .map(async dirEntry => {
      const filePath = join(POSTS_DIR_PATH, dirEntry.name, 'index.md')
      const content = await readFile(filePath, { encoding: 'utf-8' })
      const { data } = matter(content)

      return {
        slug: dirEntry.name,
        ...data,
      } as IPost
    })

  const posts = await Promise.all(postPromises)
  return posts
}
