<template>
  <main class="container">
    <h2>Товары</h2>
    <products />
    <h2>Корзина</h2>
    <cart />
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import { getInitData, getProductsList } from '../api/products'

import Products from '../components/Products'
import Cart from '../components/Cart'
import { DATA_UPDATES } from '../application/constants'

const { mapActions: groupsActions } = createNamespacedHelpers('groups')
const { mapActions: productsActions } = createNamespacedHelpers('products')
const { mapActions: currencyRateActions } = createNamespacedHelpers(
  'currencyRate'
)
const { mapActions: cartActions } = createNamespacedHelpers('cart')

export default {
  components: { Cart, Products },
  async fetch() {
    const [groupsData, productsData] = await getInitData()

    this.initGroups(groupsData)
    this.initProducts(productsData)
    this.initCurrencyRate()
  },
  mounted() {
    this.initPeriodicDataUpdate()
  },
  methods: {
    ...groupsActions({
      initGroups: 'initItems',
    }),
    ...productsActions({
      initProducts: 'initItems',
    }),
    ...currencyRateActions({
      initCurrencyRate: 'initValue',
      setCurrencyRate: 'setValue',
    }),
    ...cartActions({
      refreshCart: 'updateCart',
    }),
    initPeriodicDataUpdate() {
      setInterval(this.updateData, DATA_UPDATES.PERIOD_MS)
    },
    async updateData() {
      const productsData = await getProductsList()
      this.initProducts(productsData)
      this.setCurrencyRate()
      this.refreshCart(productsData)
    },
  },
}
</script>

<style lang="scss">
h2 {
  margin-bottom: 20px;
}
</style>
