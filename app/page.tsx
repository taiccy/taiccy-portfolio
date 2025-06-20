export default function Home() {
  return (
    <>
      <div className="flex h-[calc(100vh---spacing(24))] items-center justify-center">
        <div className="px-3 text-center">
          <h1 className="flex flex-col justify-center gap-2 text-center text-4xl font-extrabold tracking-widest text-stone-800 transition-all duration-1000 sm:text-5xl starting:opacity-0">
            TAICCY&apos;s PORTFOLIO
          </h1>
          <p className="mt-8 text-sm tracking-widest text-stone-800 transition-all delay-200 duration-1000 sm:text-xl starting:opacity-0">
            <span>The Portfolio Site of Taiccy</span>
            <span className="px-2">—</span>
            <span className="sm:whitespace-nowrap">
              Crafting Frontends, Building Systems, Sharing Vision.
            </span>
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-x-12 gap-y-24 px-6 pb-24 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="bg-muted aspect-video rounded-lg"></div>
        ))}
      </div>
    </>
  )
}
