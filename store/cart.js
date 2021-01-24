'use strict'

import { CART } from '../application/constants'
import { getValidNumberInRange } from '../application/helpers'
import { UPDATE, DELETE, SET } from './tools/mutation-types'

export const namespaced = true

export const state = () => ({
  items: {},
})

export const getters = {
  getItems: (state) => Object.values(state.items),
}

export const actions = {
  updateCart: ({ commit, state, getters }, newProducts) => {
    for (const item of getters.getItems) {
      const newProduct = newProducts.find((product) => product.id === item.id)
      if (!newProduct || newProduct.quantity < CART.MIN_VALUE) {
        commit(UPDATE, {
          id: item.id,
          value: item.inCartQuantity,
          isOutOfStock: true,
        })
      } else if (newProduct.quantity < item.quantity) {
        commit(UPDATE, {
          id: item.id,
          value: newProduct.quantity,
          quantity: newProduct.quantity,
          isOutOfStock: false,
        })
      } else {
        commit(UPDATE, {
          id: item.id,
          quantity: newProduct.quantity,
          isOutOfStock: false,
        })
      }
    }
  },
  setItem: ({ commit, state }, data) => {
    if (!state.items[data.id]) {
      commit(SET, data)
    }
  },
  updateItemQuantity: ({ commit, state }, data) => {
    if (state.items[data.id]) {
      commit(UPDATE, data)
    }
  },
  deleteItem: ({ commit, state }, id) => {
    if (state.items[id]) {
      commit(DELETE, id)
    }
  },
}

export const mutations = {
  [SET]: (state, data) => {
    state.items = {
      ...state.items,
      [data.id]: {
        ...data,
        inCartQuantity: CART.MIN_VALUE,
        isOutOfStock: false,
      },
    }
  },
  [UPDATE]: (state, data) => {
    const { id } = data
    const currentValue = state.items[id]
    const {
      value = currentValue.inCartQuantity,
      quantity = currentValue.quantity,
      isOutOfStock = currentValue.isOutOfStock,
    } = data
    const newItemObject = {
      ...currentValue,
      isOutOfStock,
      quantity,
      inCartQuantity: getValidNumberInRange(
        value,
        CART.MIN_VALUE,
        currentValue.quantity
      ),
    }
    state.items = { ...state.items, [id]: newItemObject }
  },
  [DELETE]: (state, id) => {
    const newItems = state.items
    delete newItems[id]
    state.items = { ...newItems }
  },
}
