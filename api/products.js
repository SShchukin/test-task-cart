import { URLS, GROUP, PRODUCT, RESPONSE_FIELDS } from '../application/constants'
import { logError } from '../application/helpers'

const requestProducts = () => {
  return fetch(`${URLS.BASE_URL}raw/data.json`)
}

const requestProductsGroups = () => {
  return fetch(`${URLS.BASE_URL}raw/names.json`)
}

const getFormattedGroupItems = (products) => {
  const formattedData = []

  for (const data of products) {
    const [id, content] = data
    const name = content[PRODUCT.NAME]
    formattedData.push({ id, name })
  }

  return formattedData
}

const getFormattedGroups = (groups) => {
  const groupEntries = Object.entries(groups)
  const formattedData = []

  for (const entry of groupEntries) {
    const [id, content] = entry
    const name = content[GROUP.NAME]
    const items = getFormattedGroupItems(Object.entries(content[GROUP.ITEMS]))
    formattedData.push({ id, name, items })
  }
  return formattedData
}

export const getGroupsList = async () => {
  try {
    const productsGroups = await (await requestProductsGroups()).json()

    return getFormattedGroups(productsGroups)
  } catch (e) {
    logError(e)
  }
}

const getFormattedProducts = (products) => {
  return products.map((product) => {
    return {
      id: product[PRODUCT.ID],
      quantity: product[PRODUCT.QUANTITY],
      priceInDollars: product[PRODUCT.PRICE_IN_DOLLARS],
      groupId: product[PRODUCT.GROUP_ID],
    }
  })
}

export const getProductsList = async () => {
  try {
    const products = await (await requestProducts()).json()

    return getFormattedProducts(
      products[RESPONSE_FIELDS.PRODUCTS_VALUE][RESPONSE_FIELDS.PRODUCTS_GOODS]
    )
  } catch (e) {
    logError(e)
  }
}

export const getInitData = () => {
  return Promise.all([getGroupsList(), getProductsList()])
}
