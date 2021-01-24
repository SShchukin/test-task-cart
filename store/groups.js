'use strict'

import { INIT } from './tools/mutation-types'

export const namespaced = true

export const state = () => ({
  items: [],
})

export const getters = {
  getItems: (state) => state.items,
}

export const actions = {
  initItems: ({ commit }, data) => {
    commit(INIT, data)
  },
}

export const mutations = {
  [INIT]: (state, data) => {
    state.items = data
  },
}
