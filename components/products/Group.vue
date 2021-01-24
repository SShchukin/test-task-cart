<template>
  <div class="group">
    <group-header
      v-model="isExpanded"
      :name="group.name"
      :disabled="processedProducts.length === 0"
    />
    <transition name="expand">
      <group-items
        v-if="isExpanded"
        :items="processedProducts"
        class="group__items"
      />
    </transition>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import GroupHeader from './group/GroupHeader'
import GroupItems from './group/GroupItems'

const { mapGetters: productsGetters } = createNamespacedHelpers('products')
export default {
  name: 'Group',
  components: { GroupItems, GroupHeader },
  props: {
    group: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        name: '',
        items: [],
      }),
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    ...productsGetters({
      getProducts: 'getItems',
    }),
    processedProducts() {
      return this.getProducts.filter(this.groupFilter).map(this.groupMap)
    },
  },
  methods: {
    groupFilter(item) {
      return item.groupId === this.group.id
    },
    groupMap(item) {
      const { name = '' } = this.findGroupProduct(item.id)
      return { ...item, name, groupName: this.group.name }
    },
    findGroupProduct(productId) {
      return this.group.items.find((product) => product.id === productId)
    },
  },
}
</script>

<style scoped lang="scss">
.group {
  &__items {
    max-height: 1000px;
    width: 100%;
    height: max-content;
  }
}
</style>
