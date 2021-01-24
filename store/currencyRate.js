'use strict'

import { getRandomIntInRange } from '../application/helpers'
import { CURRENCY } from '../application/constants'
import { INIT, SET } from './tools/mutation-types'

export const namespaced = true

export const state = () => ({
  currentValue: 0,
  previousValue: 0,
})

export const getters = {
  getValue: (state) => state.currentValue,
  getPreviousValue: (state) => state.previousValue,
}

export const actions = {
  initValue: ({ commit }) => {
    const value = getRandomIntInRange(CURRENCY.MIN_VALUE, CURRENCY.MAX_VALUE)
    commit(INIT, value)
  },
  setValue: ({ commit }) => {
    const value = getRandomIntInRange(CURRENCY.MIN_VALUE, CURRENCY.MAX_VALUE)
    commit(SET, value)
  },
}

export const mutations = {
  [INIT]: (state, data) => {
    state.currentValue = data
    state.previousValue = data
  },
  [SET]: (state, data) => {
    state.previousValue = state.currentValue
    state.currentValue = data
  },
}
