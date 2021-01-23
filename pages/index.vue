<template>
  <main class="container">
    <products />
    <cart />
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import { getInitData } from '../api/products'

import Products from '../components/Products'
import Cart from '../components/Cart'

const { mapActions: groupsActions } = createNamespacedHelpers('groups')
const { mapActions: productsActions } = createNamespacedHelpers('products')

export default {
  components: { Cart, Products },
  async fetch() {
    const [groupsData, productsData] = await getInitData()

    this.setGroups(groupsData)
    this.setProducts(productsData)
  },
  methods: {
    ...groupsActions({
      setGroups: 'setItems',
    }),
    ...productsActions({
      setProducts: 'setItems',
    }),
  },
}
</script>

<style lang="scss"></style>
