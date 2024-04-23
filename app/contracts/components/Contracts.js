import Image from "next/image"
export default function Contracts({ contracts }) {
  return (
    <div className="flex flex-col space-y-4 w-full px-4 py-4">
      <h4 className="text-4xl font-bold">Mints</h4>
      {contracts?.length === 0 && (
        <div className="text-lg font-normal text-zinc-400">
          No mints yet. Be the first to create with Streamz by going to{" "}
          <a
            href="https://zora.co"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold">
            zora.co
          </a>{" "}
          or{" "}
          <a
            href="https://sound.xyz"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-bold">
            sound.xyz
          </a>
          , creating a collection, and adding us as an 0xSplit.
        </div>
      )}
      <div className="flex flex-col md:flex-row space-x-3 w-full flex-wrap justify-evenly">
        {contracts?.map((contract, index) => (
          <a
            href={`https://mint.fun/base/${contract.contractAddress}`}
            target="_blank"
            rel="noreferrer"
            key={contract.contractAddress}
            className="flex flex-col space-y-3 group relative py-2 px-4 items-center md:w-[%18]">
            <div className="absolute inset-0 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-10 bg-zinc-100 backdrop-blur h-full rounded-[4px]" />
            <div className="absolute top-6 left-6 rounded-full bg-foreground text-sm text-background font-bold px-4 py-1 z-30">
              hover to play song
            </div>
            <div className="w-full aspect-square bg-green-500 rounded-2xl relative overflow-hidden">
              <Image
                src={contract.metadata.imageUrl || "/community.png"}
                alt={contract.metadata.name || contract.contractAddress}
                fill
                className="object-cover"
              />
              <div className="hover:cursor-pointer absolute bottom-4 right-4 transform translate-y-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-200 transition-all bg-primary rounded-full p-3 hover:scale-105">
                <Image
                  src="/play.svg"
                  alt="play button"
                  height={28}
                  width={28}
                  className="fill-black object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 relative w-full pb-2">
              <div className="text-base font-bold">
                {contract.metadata.name || contract.contractAddress}
              </div>
              {contract.metadata.description && (
                <div className="text-sm font-normal">
                  {contract.metadata.description}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
