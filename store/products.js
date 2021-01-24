'use strict'

import { INIT } from './tools/mutation-types'

export const namespaced = true

export const state = () => ({
  itemsCurrent: [],
})

export const getters = {
  getItems: (state) => state.itemsCurrent,
}

export const actions = {
  initItems: ({ commit }, data) => {
    commit(INIT, data)
  },
}

export const mutations = {
  [INIT]: (state, data) => {
    state.itemsCurrent = data
  },
}
