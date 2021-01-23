<template>
  <section class="products-groups">
    <group
      v-for="group in getGroups"
      :key="group.id + group.name"
      :group="group"
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

<style scoped></style>
