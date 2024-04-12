const Footer = () => {
  return (
    <footer className="flex flex-row w-full min-h-96 items-center justify-evenly">
      <div className="flex flex-col space-y-4 w-full md:w-3/12 px-32">
        <div className="text-2xl font-bold font-serif uppercase">LNRZ</div>
        <div className=" text-sm font-normal">
          <span className="font-['Inter']">©</span> 2024 LNRZ
        </div>
        <div className="text-sm font-normal">Privacy - Terms</div>
      </div>
      <div className="w-9/12 px-32"></div>
    </footer>
  )
}

export default Footer
