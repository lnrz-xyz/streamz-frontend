"use client"

import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import duration from "dayjs/plugin/duration"
import { useEffect, useMemo, useState } from "react"

dayjs.extend(utc)
dayjs.extend(duration)

const Countdown = () => {
  // date is in UTC
  const start = useMemo(
    () => dayjs(process.env.NEXT_PUBLIC_CLAIM_START).utc(),
    []
  )

  const [time, setTime] = useState(getTime(start, dayjs().utc()))

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs().utc()
      setTime(getTime(start, now))
    }, 1000)
    return () => clearInterval(interval)
  }, [start])

  return (
    <div className="backdrop-blur-lg rounded-[4px] backdrop-brightness-75 px-2">
      {time}
    </div>
  )
}

const getTime = (start, now) => {
  const diff = start.diff(now)
  const duration = dayjs.duration(diff)
  const hours = duration.hours()
  const minutes = duration.minutes()
  const seconds = duration.seconds()
  return `${hours}h ${minutes}m ${seconds}s`
}

export default Countdown
