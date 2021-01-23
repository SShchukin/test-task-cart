import { SET } from './tools/mutation-types'

export const namespaced = true

export const state = () => ({
  items: [],
})

export const getters = {
  getItems: (state) => state.items,
}

export const actions = {
  setItems: ({ commit }, data) => {
    commit(SET, data)
  },
}

export const mutations = {
  [SET]: (state, data) => {
    state.items = data
  },
}
