import Link from 'next/link'

import { IPost } from 'services/posts'

type Props = Omit<IPost, 'tag'>

function Post({ slug, title, date, subTitle }: Props) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <Link
      className="block subpixel-antialiased hover:scale-[1.005] transition ease-in-out"
      href={'/' + slug}
    >
      <article>
        <h2 className="text-3xl font-bold text-ladoga-900 mb-2">{title}</h2>
        <span className="text-sm text-gray-300 mb-1">
          {new Date(date).toLocaleDateString('en', options)}
        </span>
        <h3 className="text-base text-gray-300">{subTitle}</h3>
      </article>
    </Link>
  )
}

export default Post
