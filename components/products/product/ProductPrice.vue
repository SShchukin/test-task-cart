<template>
  <div>{{ priceInDollars }}$</div>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: {
    priceInDollars: {
      type: Number,
      required: true,
      default: 0,
      validator: (value) => value >= 0,
    },
  },
}
</script>

<style scoped></style>
