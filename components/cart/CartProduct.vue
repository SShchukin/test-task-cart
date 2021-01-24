<template>
  <div
    :class="{ 'cart-product_centered': product.isOutOfStock }"
    class="cart-product"
  >
    <cart-product-name
      :name="fullName"
      :is-out-of-stock="product.isOutOfStock"
      class="cart-product__item"
    />
    <cart-product-quantity
      :quantity="product.quantity"
      :in-cart-quantity="product.inCartQuantity"
      :is-out-of-stock="product.isOutOfStock"
      class="cart-product__item"
      @input="updateProductQuantity"
    />
    <cart-product-price
      :price-in-dollars="product.priceInDollars"
      :is-out-of-stock="product.isOutOfStock"
      class="cart-product__item"
    />
    <cart-product-delete-button
      class="cart-product__item hover"
      @click.native="deleteFromCart"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import CartProductName from './cart-product/CartProductName'
import CartProductPrice from './cart-product/CartProductPrice'
import CartProductQuantity from './cart-product/CartProductQuantity'
import CartProductDeleteButton from './cart-product/CartProductDeleteButton'

const { mapActions: cartActions } = createNamespacedHelpers('cart')
export default {
  name: 'CartProduct',
  components: {
    CartProductDeleteButton,
    CartProductQuantity,
    CartProductPrice,
    CartProductName,
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        groupId: 0,
        groupName: '',
        id: 0,
        inCartQuantity: 0,
        name: '',
        priceInDollars: 0,
        quantity: 0,
      }),
    },
  },
  computed: {
    fullName() {
      return `${this.product.groupName}. ${this.product.name}`
    },
  },
  methods: {
    ...cartActions({
      deleteItemFromCart: 'deleteItem',
      updateQuantity: 'updateItemQuantity',
    }),
    deleteFromCart() {
      this.deleteItemFromCart(this.product.id)
    },
    updateProductQuantity(value) {
      const id = this.product.id
      this.updateQuantity({ id, value })
    },
  },
}
</script>

<style scoped lang="scss">
.cart-product {
  display: flex;
  &_centered {
    align-items: center;
  }
  &__item {
    padding-right: 10px;
    &:first-child {
      width: 40%;
    }
    &:nth-child(2) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 30%;
    }
    &:nth-child(4) {
      width: 10%;
    }
  }
}
</style>
