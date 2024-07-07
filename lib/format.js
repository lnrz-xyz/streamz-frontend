export const formatFloat = float => {
  // the float will be something like 300000.282874 and we want it to be 300.28k

  // if the float is less than 1000, we don't need to do anything

  if (float < 1000) {
    return float.toFixed(2)
  }

  // if the float is less than 1000000, we need to divide by 1000 and add a k

  if (float < 1000000) {
    return `${(float / 1000).toFixed(2)}k`
  }

  // if the float is less than 1000000000, we need to divide by 1000000 and add a m

  if (float < 1000000000) {
    return `${(float / 1000000).toFixed(2)}M`
  }

  return `${(float / 1000000000).toFixed(2)}B`
}
