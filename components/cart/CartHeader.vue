<template>
  <div class="cart-header">
    <div class="cart-header__column">Наименование товара и описание</div>
    <div class="cart-header__column">Количество</div>
    <div class="cart-header__column">Цена</div>
  </div>
</template>

<script>
export default {
  name: 'CartHeader',
}
</script>

<style scoped lang="scss">
.cart-header {
  display: flex;
  font-weight: bold;
  &__column {
    &:first-child {
      width: 40%;
    }
    &:nth-child(2) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 35%;
    }
  }
}
</style>
