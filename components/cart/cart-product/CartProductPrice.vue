<template>
  <div class="cart-product-price">
    <template v-if="!isOutOfStock">
      <span
        :class="{
          'cart-product-price__value_higher': isPriceHigher && !isPricesEqual,
          'cart-product-price__value_lower': !isPriceHigher && !isPricesEqual,
        }"
        class="cart-product-price__value"
        >{{ price }}</span
      >
      / шт.
    </template>
    <template v-else> --- </template>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { getFormattedPrice } from '../../../application/helpers'
const { mapGetters: currencyRateGetters } = createNamespacedHelpers(
  'currencyRate'
)
export default {
  name: 'CartProductPrice',
  props: {
    priceInDollars: {
      type: Number,
      required: true,
      default: 0,
      validator: (value) => value > 0,
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...currencyRateGetters({
      currencyRate: 'getValue',
      previousCurrencyRate: 'getPreviousValue',
    }),
    isPriceHigher() {
      return this.currencyRate > this.previousCurrencyRate
    },
    isPricesEqual() {
      return this.currencyRate === this.previousCurrencyRate
    },
    price() {
      return getFormattedPrice(this.priceInDollars * this.currencyRate)
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.cart-product-price {
  &__value {
    font-weight: bold;
    color: $color-font-price;
    &_higher {
      color: $color-font-high;
    }
    &_lower {
      color: $color-font-low;
    }
  }
}
</style>
