<template>
  <div
    :class="{ 'cart-product-name_warning': isOutOfStock }"
    class="cart-product-name"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'CartProductName',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.cart-product-name {
  &_warning {
    color: $color-warning;
  }
}
</style>
