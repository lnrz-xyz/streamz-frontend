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
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration)
      })
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

  const handleSliderChange = value => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
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
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleSliderChange}
              aria-label="Song progress"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Button variant="outline" size="icon" aria-label="Previous song">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                onClick={togglePlayPause}
                size="icon"
                aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <Button variant="outline" size="icon" aria-label="Next song">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <audio ref={audioRef} src={audioSrc} preload="metadata" />
        </CardContent>
      </Card>
    </div>
  )
}
