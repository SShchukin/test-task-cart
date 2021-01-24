<template>
  <div
    :class="{ 'cart-product_centered': product.isOutOfStock }"
    class="product hover"
    @click="click"
  >
    <product-name :name="product.name" class="product__item product__name" />
    <product-quantity
      :quantity="product.quantity"
      class="product__item product__quantity"
    />
    <product-price
      :price-in-dollars="product.priceInDollars"
      class="product__item product__price"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { CART } from '../../application/constants'
import ProductName from './product/ProductName'
import ProductPrice from './product/ProductPrice'
import ProductQuantity from './product/ProductQuantity'

const { mapActions: cartActions } = createNamespacedHelpers('cart')
export default {
  name: 'Product',
  components: { ProductQuantity, ProductPrice, ProductName },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        name: '',
        quantity: 0,
        priceInDollars: 0,
        groupId: 0,
      }),
    },
  },
  computed: {
    isProductInStock() {
      return this.product.quantity >= CART.MIN_VALUE
    },
  },
  methods: {
    ...cartActions({
      addProductInCart: 'setItem',
    }),
    click() {
      if (this.isProductInStock) {
        this.addProductInCart(this.product)
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.product {
  display: flex;
  align-items: center;
  &__item {
    padding: 10px 25px;
    border-right: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
  }
  &__name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 180px;
    flex: 1;
  }
  &__quantity {
    background-color: $color-background;
  }
  &__price {
    background-color: $color-background-alt;
  }
  &__quantity,
  &__price {
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }
}
</style>
