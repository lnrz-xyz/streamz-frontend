"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function SongPlayer({ songTitle, albumCover, audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime)
      })
    }
    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", () => {})
        audio.removeEventListener("timeupdate", () => {})
      }
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 w-full">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">{songTitle}</h1>
          <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
            <Image
              src={albumCover}
              alt={songTitle}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Button
                onClick={togglePlayPause}
                size="icon"
                className="h-12 w-12"
                aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
          <audio ref={audioRef} src={audioSrc} preload="metadata" />
        </CardContent>
      </Card>
    </div>
  )
}
