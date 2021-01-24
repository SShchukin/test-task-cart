<template>
  <section class="products-groups">
    <group
      v-for="group in getGroups"
      :key="group.id + group.name"
      :group="group"
      class="products-groups__item"
    />
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Group from './products/Group'
const { mapGetters: groupsGetters } = createNamespacedHelpers('groups')
export default {
  name: 'Products',
  components: { Group },
  computed: {
    ...groupsGetters({
      getGroups: 'getItems',
    }),
  },
}
</script>

<style scoped lang="scss">
.products-groups {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  &__item {
    flex-basis: calc(50% - 10px);
    &:nth-child(odd) {
      margin-right: auto;
    }
    &:nth-last-child(n + 3) {
      margin-bottom: 20px;
    }
  }
}
</style>
