"use client"
import {
  SoundDialogContent,
  ZoraDialogContent,
} from "@/app/score/components/Directions"
import {
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog"

const CreateButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2.5">
      <Dialog>
        <DialogTrigger className="flex flex-row items-center justify-center border-foreground border p-4 rounded-full">
          <p className="text-base font-bold">Create With Zora</p>
        </DialogTrigger>
        <ZoraDialogContent />
      </Dialog>
      <Dialog>
        <DialogTrigger className="flex flex-row items-center justify-center bg-foreground text-background p-4 rounded-full">
          <p className="text-base font-bold">Create With Sound</p>
        </DialogTrigger>
        <SoundDialogContent />
      </Dialog>
    </div>
  )
}

export default CreateButtons
