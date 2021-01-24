<template>
  <section class="cart">
    <template v-if="getCartItems.length > 0">
      <cart-header class="cart__item" />
      <cart-product
        v-for="product in getCartItems"
        :key="product.id + product.name + product.groupId"
        :product="product"
        class="cart__item"
      />
      <cart-total :total="formattedTotalPrice" class="cart__item" />
    </template>
    <template v-else> Корзина пуста </template>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { getFormattedPrice } from '../application/helpers'
import CartHeader from './cart/CartHeader'
import CartProduct from './cart/CartProduct'
import CartTotal from './cart/CartTotal'
const { mapGetters: cartGetters } = createNamespacedHelpers('cart')
const { mapGetters: currencyRateGetters } = createNamespacedHelpers(
  'currencyRate'
)
export default {
  name: 'Cart',
  components: { CartTotal, CartProduct, CartHeader },
  computed: {
    ...cartGetters({
      getCartItems: 'getItems',
    }),
    ...currencyRateGetters({
      currencyRate: 'getValue',
    }),
    pricesInDollars() {
      return this.getCartItems
        .filter(this.isInStock)
        .map((item) => item.priceInDollars * item.inCartQuantity)
    },
    formattedTotalPrice() {
      const total = this.getTotalPrice(this.pricesInDollars)
      return getFormattedPrice(total * this.currencyRate)
    },
  },
  methods: {
    getTotalPrice(prices) {
      let sum = 0
      for (const price of prices) {
        sum += price
      }
      return sum
    },
    isInStock(product) {
      return !product.isOutOfStock
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.cart {
  border: 1px solid $color-border;
  border-radius: 10px;
  padding: 12px 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  &__item {
    padding-bottom: 12px;
    border-bottom: 1px solid $color-border;
    margin-bottom: 12px;
    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
      margin-bottom: 0;
    }
  }
}
</style>
