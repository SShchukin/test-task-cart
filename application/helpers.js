export const logError = (data) => {
  // eslint-disable-next-line no-console
  console.error(data)
}

export const getRandomIntInRange = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export const getFormattedPrice = (data) => {
  const price = Number.prototype.toFixed.call(parseFloat(data) || 0, 2)
  const priceFormatted = price
    .replace(/(\D)/g, ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')

  return priceFormatted + ' руб.'
}

export const getValidNumberInRange = (value, min, max) => {
  let result = value
  if (value > max) {
    result = max
  } else if (result < min) {
    result = min
  }
  return result
}
