<template>
  <p :title="name">{{ name }}</p>
</template>

<script>
export default {
  name: 'ProductName',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style scoped></style>
