"use client"
import { useState, useRef, createContext, useContext } from "react"
import Image from "next/image"

const AudioContext = createContext()

export const AudioContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [lastAudioRef, setLastAudioRef] = useState(null)

  const run = audioRef => {
    if (lastAudioRef && lastAudioRef !== audioRef) {
      lastAudioRef.pause()
      lastAudioRef.currentTime = 0
      console.log("paused last audio")
      audioRef.currentTime = 0
      audioRef.play()
      setIsPlaying(true)
    } else {
      console.log("isplaying", isPlaying)
      !isPlaying ? audioRef.play() : audioRef.pause()
      setIsPlaying(!isPlaying)
    }
    setLastAudioRef(audioRef)
  }

  return (
    <AudioContext.Provider value={{ isPlaying, run }}>
      {children}
    </AudioContext.Provider>
  )
}

const PlayButton = ({ audioFileSrc }) => {
  const { run } = useContext(AudioContext)

  const audioRef = useRef()

  return (
    <div
      onClick={() => {
        run(audioRef.current)
      }}
      className="hover:cursor-pointer absolute bottom-4 right-4 transform translate-y-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-200 transition-all bg-primary rounded-full p-3">
      <audio ref={audioRef} src={audioFileSrc} />
      <Image
        src="/play.svg"
        alt="play button"
        height={28}
        width={28}
        className="fill-black object-contain"
      />
    </div>
  )
}

export default PlayButton
