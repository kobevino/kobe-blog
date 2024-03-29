import { Kaushan_Script, Oleo_Script } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { getPosts } from 'services/posts'
import { Post } from 'components'

const oleoScript = Oleo_Script({ subsets: ['latin'], weight: ['400'] })
const kaushanScript = Kaushan_Script({ subsets: ['latin'], weight: ['400'] })

export default async function Page(): Promise<JSX.Element> {
  const posts = await getPosts()

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <header className="flex justify-between items-center mb-8">
        <Link href="/" className={`${oleoScript.className} text-2xl`}>
          Kobe's log
        </Link>
        <span className={`${kaushanScript.className} flex items-center`}>
          by
          <Link href="/" className="ml-2">
            <Image
              className="rounded-full"
              src="/kobe.png"
              width={32}
              height={32}
              alt="author"
            />
          </Link>
        </span>
      </header>
      <main>
        {posts.map(post => (
          <Post key={post.slug} {...post} />
        ))}
      </main>
    </div>
  )
}
