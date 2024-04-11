import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div
      id="faq"
      className="flex flex-col w-full min-h-[75vh] items-center justify-evenly">
      <h3 className="text-center text-black text-6xl font-medium font-serif">
        FAQ
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full md:w-8/12 font-sans">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            When will governance be available for the public?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Very soon! We are currently in the final stages of development and
            will announce the launch date shortly. Follow us on twitter at{" "}
            <a
              href="https://x.com/streamzonbase"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline">
              @lnrzxyz
            </a>{" "}
            and farcaster{" "}
            <a
              href="https://warpcast.com/streamz"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline">
              @lnrz
            </a>{" "}
            to keep updated on what is to come...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">
            Why not just fuel single tracks?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Unlike single tracks, a catalog offers diversified exposure to the
            music industry{"'"}s revenue potential, spanning various genres and
            artists.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">
            How does blockchain technology enhance this platform?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Blockchain ensures transparency, security, and seamless
            transactions, providing a trustworthy environment for users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl">
            Are royalties distributed directly to users?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            No, the platform reinvests royalties to acquire new music and
            artists, increasing the catalog{"'"}s value over time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl">
            Can I suggest music or artists to add to the catalog?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes, governance is a p0 key feature of the platform. Users can
            propose and vote on new additions to the catalog as well as towards
            funding other music projects like new artist{"'"}s growth or
            strategic partnerships.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FAQ
