export default function Header() {
  return (
    <div className="z-0 relative flex flex-col items-center justify-center px-8 py-8 bg-gradient-to-b from-green-500 to-primary min-h-[50vh] text-white gap-4 rounded-lg h-[80vh] md:h-[612px]">
      <div className="flex flex-col gap-2 max-w-xl">
        <h1 className="font-black text-8xl tracking-tighter text-center">
          Streamz
        </h1>
        <h3 className="text-center text-white text-base font-normal">
          We don’t trust people who don’t like music.
        </h3>
      </div>
      <a
        href="https://t.me/wstreamz"
        className={
          "p-4 bg-white rounded-full justify-center items-center flex text-black text-base font-bold gap-1"
        }>
        Join the Telegram
      </a>
    </div>
  )
}
