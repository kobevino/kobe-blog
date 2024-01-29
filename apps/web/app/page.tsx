import Link from 'next/link'
import Image from 'next/image'
import { Oleo_Script, Kaushan_Script } from 'next/font/google'
import { getContents } from 'services/contents'

const oleoScript = Oleo_Script({ subsets: ['latin'], weight: ['400'] })
const kaushanScript = Kaushan_Script({ subsets: ['latin'], weight: ['400'] })

export default async function Page(): Promise<JSX.Element> {
  const res = await getContents()
  console.log(res)

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
      <main></main>
    </div>
  )
}
