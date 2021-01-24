<template>
  <div
    :class="{
      'group-header_expanded': value && !disabled,
      'group-header_disabled': disabled,
    }"
    class="group-header hover"
    @click="click"
  >
    <chevron
      v-if="!disabled"
      :class="{ 'group-header__chevron_rotate': value }"
      class="group-header__chevron"
    />
    <div class="group-header__name">
      {{ name }}
    </div>
    <div v-if="disabled" class="group-header__disabled-text">
      {{ disabledText }}
    </div>
  </div>
</template>

<script>
import Chevron from '../../UI/icons/Chevron'
export default {
  name: 'GroupHeader',
  components: { Chevron },
  model: {
    prop: 'value',
    event: 'set',
  },
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    name: {
      type: String,
      required: true,
      default: 'Toggle',
      validator: (value) => {
        return value.length > 0
      },
    },
    disabledText: {
      type: String,
      default: '- нет в наличии',
    },
  },
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('set', !this.value)
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/style/main.scss';
.group-header {
  display: flex;
  align-items: center;
  background-color: $color-main;
  color: $color-font;
  border: 1px solid $color-border;
  padding: 12px 24px;
  border-radius: 10px;
  user-select: none;
  &_disabled {
    cursor: not-allowed !important;
    opacity: 1 !important;
    background-color: $color-disabled;
  }
  &_expanded {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  &__chevron {
    margin-right: 10px;
    transition: all 0.3s ease;
    &_rotate {
      transform: rotate(180deg);
    }
  }
  &__disabled-text {
    color: $color-warning;
    margin-left: 6px;
  }
}
</style>
