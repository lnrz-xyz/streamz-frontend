import Image from "next/image"
export default function Tokenomics() {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <h4 className="text-2xl font-bold">Tokenomics</h4>
      <div className="flex flex-col md:flex-row space-x-3 px-10">
        <div className="flex flex-col space-y-3">
          <div className="w-64 h-64 bg-green-500 rounded-2xl relative overflow-hidden">
            <Image
              src="/supply.png"
              alt="token supply"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-base font-bold">Total Supply</div>
            <div className="text-sm font-normal">83,000,000,000</div>
          </div>
        </div>
      </div>
    </div>
  )
}
