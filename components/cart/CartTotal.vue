<template>
  <div class="cart-total">
    Общая стоимость: <span>{{ total }}</span>
  </div>
</template>

<script>
export default {
  name: 'CartTotal',
  props: {
    total: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.cart-total {
  span {
    font-weight: bold;
    color: $color-font-cta;
  }
}
</style>
