import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex-1 duration-1000 starting:opacity-0">
      <div className="flex flex-col items-center justify-center gap-8 px-3 pt-20 text-center">
        <h1 className="flex flex-col gap-2 text-4xl font-extrabold tracking-widest text-stone-800 sm:text-5xl">
          404
          <span className="text-lg">お探しのページは見つかりませんでした</span>
        </h1>
        <Link href="/" className="flex font-bold tracking-wider underline">
          <ArrowLeft className="mr-2" />
          トップページへ戻る
        </Link>
      </div>
    </main>
  )
}
