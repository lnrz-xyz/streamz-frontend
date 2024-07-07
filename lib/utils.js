import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function uniqBy(a, key) {
  var seen = {}
  return a.filter(function (item) {
    if (!item) return false
    var k = key(item)
    return seen.hasOwnProperty(k) ? false : (seen[k] = true)
  })
}

export function trimCharacterFromEnd(str, charToRemove) {
  while (str.endsWith(charToRemove)) {
    str = str.slice(0, -1)
  }
  return str
}

export function trimPrefix(str, prefix) {
  if (str.startsWith(prefix)) {
    return str.slice(prefix.length)
  }
  return str
}
