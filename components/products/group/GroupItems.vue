<template>
  <div class="group-items">
    <product
      v-for="product in items"
      :key="product.id + product.name"
      :product="product"
      class="group-items__product"
    />
  </div>
</template>

<script>
import Product from '../Product'
export default {
  name: 'GroupItems',
  components: { Product },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.group-items {
  background-color: $color-main;
  color: $color-font;
  border-left: 1px solid $color-border;
  border-top: 0;
  display: flex;
  flex-wrap: wrap;
  &__product {
    width: 100%;
  }
}
</style>
