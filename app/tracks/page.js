import { SongPlayer } from "@/components/SongPlayer"

export async function generateMetadata({ searchParams }) {
  const songTitle = searchParams.title || "Unknown Song"
  const artistName = searchParams.artist || "Unknown Artist"
  const albumCover =
    searchParams.cover || "/placeholder.svg?height=400&width=400"

  return {
    title: `${songTitle} by ${artistName}`,
    description: `Listen to ${songTitle} by ${artistName}`,
    openGraph: {
      title: `${songTitle} by ${artistName}`,
      description: `Listen to ${songTitle} by ${artistName}`,
      images: [{ url: albumCover }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${songTitle} by ${artistName}`,
      description: `Listen to ${songTitle} by ${artistName}`,
      images: [albumCover],
    },
  }
}

export default function SongPage({ searchParams }) {
  const songTitle = searchParams.title || "Unknown Song"
  const artistName = searchParams.artist || "Unknown Artist"
  const albumCover =
    searchParams.cover || "/placeholder.svg?height=400&width=400"
  const audioSrc =
    searchParams.audio || "https://example.com/path-to-your-audio-file.mp3"

  return (
    <SongPlayer
      songTitle={songTitle}
      artistName={artistName}
      albumCover={albumCover}
      audioSrc={audioSrc}
    />
  )
}
