import ConsultationList from './_consultation-list'

export default function Page() {
  return (
    <div className="space-y-5 p-6">
      <h1 className="text-5xl font-extrabold tracking-wider transition-all duration-1000 starting:opacity-0">
        CONTACT
      </h1>
      <p className="text-xs transition-all delay-200 duration-1000 sm:text-sm starting:opacity-0">
        「励ましのお言葉」から「お仕事のご依頼・ご相談」まで、幅広いお声をお待ちしております。
        <br />
        お気軽にご連絡をお願いいたします。
      </p>
      <ConsultationList />
      <form action="" className="mx-auto max-w-2xl pb-8">
        <div className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-stone-300 bg-stone-50 p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-stone-300 bg-stone-50 p-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-stone-300 bg-stone-50 p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md border-2 border-blue-600 bg-blue-50 px-4 py-2 font-bold text-blue-600 hover:cursor-pointer"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  )
}
