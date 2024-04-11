import Image from "next/image"

export default function Community() {
  return (
    <div id="community" className="flex flex-col w-full">
      <h4 className="text-2xl font-bold">Community</h4>
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 w-full">
        <p className="w-1/3 text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          blandit neque dui, malesuada interdum est hendrerit in. In eget tempus
          tellus. Curabitur finibus dolor nec mi porttitor, in rutrum libero
          accumsan. Nulla sollicitudin eros velit, quis volutpat arcu feugiat
          vitae. Aliquam ornare nibh in est viverra elementum. Pellentesque
          nulla risus, convallis et bibendum rhoncus, iaculis vel eros. Aenean
          lacinia odio lorem, id vulputate nulla facilisis eu. Ut in lacus in
          elit suscipit hendrerit. Integer consectetur massa purus, ac maximus
          ligula fringilla dictum.
        </p>
        <a className="flex flex-col space-y-4 w-1/3">
          <a
            href="https://warpcast.com/streamz"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-4 items-center justify-start">
            <div className="text-base font-normal">1</div>
            <div className="w-11 h-11 bg-violet-500 rounded-lg relative">
              <Image
                src="/farcaster.svg"
                alt="farcaster"
                fill
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold">Farcaster</div>
              <div className="text-sm font-normal">streamz</div>
            </div>
          </a>
          <a
            href="https://x.com/streamzonbase"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-4 items-center justify-start">
            <div className="text-base font-normal">2</div>
            <div className="w-11 h-11 bg-black rounded-lg relative">
              <Image src="/x-logo.svg" alt="x" fill className="p-2" />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold">X</div>
              <div className="text-sm font-normal">streamzonbase</div>
            </div>
          </a>
          <a
            href="https://basescan.org/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-4 items-center justify-start">
            <div className="text-base font-normal">3</div>
            <div className="w-11 h-11 rounded-lg relative">
              <Image src="/base-logo.svg" alt="x" fill className="p-1" />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold">Base</div>
              <div className="text-sm font-normal">STRMZ</div>
            </div>
          </a>
        </a>
      </div>
    </div>
  )
}
