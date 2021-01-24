<template>
  <div class="card-product-quantity">
    <template v-if="!isOutOfStock">
      <div class="card-product-quantity__wrapper">
        <input
          v-model="currentValue"
          type="text"
          class="card-product-quantity__input"
          @input="change"
        />
        <p>шт.</p>
      </div>
      <div
        v-if="currentValue === quantity"
        class="card-product-quantity__warning-panel"
      >
        Количество ограничено
      </div>
    </template>
    <template v-else>
      <div class="card-product-quantity__warning-panel">Нет на складе</div>
    </template>
  </div>
</template>

<script>
import { CART } from '../../../application/constants'
import { getValidNumberInRange } from '../../../application/helpers'

export default {
  name: 'CartProductQuantity',
  props: {
    quantity: {
      type: Number,
      required: true,
      default: 0,
      validator: (value) => value > 0,
    },
    inCartQuantity: {
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
  data() {
    return {
      currentValue: this.inCartQuantity,
    }
  },
  watch: {
    quantity(value) {
      if (value < this.currentValue) {
        this.currentValue = value
      }
    },
  },
  methods: {
    change(event) {
      const tmpValue = String(event.target.value).replace(/[^0-9/.]/g, '')
      this.currentValue = getValidNumberInRange(
        Number(tmpValue),
        CART.MIN_VALUE,
        this.quantity
      )
      this.$emit('input', this.currentValue)
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.card-product-quantity {
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__input {
    padding: 5px 10px;
    width: 50px;
    margin-right: 5px;
  }
  &__warning-panel {
    margin-top: 7px;
    padding: 7px;
    border: 1px dashed $color-warning;
    background-color: $color-warning-background;
    color: $color-warning;
    width: 130px;
  }
}
</style>
