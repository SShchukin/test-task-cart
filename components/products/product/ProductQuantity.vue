<template>
  <div>{{ quantity }} шт.</div>
</template>

<script>
export default {
  name: 'ProductQuantity',
  props: {
    quantity: {
      type: Number,
      required: true,
      default: 0,
      validator: (value) => value >= 0,
    },
  },
}
</script>

<style scoped></style>
