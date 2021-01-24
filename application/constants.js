export const URLS = Object.freeze({
  BASE_URL: 'http://localhost:3000/',
})

export const RESPONSE_FIELDS = Object.freeze({
  PRODUCTS_VALUE: 'Value',
  PRODUCTS_GOODS: 'Goods',
})

export const GROUP = Object.freeze({
  NAME: 'G',
  ITEMS: 'B',
})

export const PRODUCT = Object.freeze({
  ID: 'T',
  NAME: 'N',
  QUANTITY: 'P',
  GROUP_ID: 'G',
  PRICE_IN_DOLLARS: 'C',
})

export const CURRENCY = Object.freeze({
  MIN_VALUE: 20,
  MAX_VALUE: 80,
})

export const CART = Object.freeze({
  MIN_VALUE: 1,
  VALUE_STEP: 1,
})

export const DATA_UPDATES = Object.freeze({
  PERIOD_MS: 15000,
})
