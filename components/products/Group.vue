<template>
  <div>
    <group-header v-model="isExpanded" :name="group.name" />
    <group-items v-if="isExpanded" :items="group.items" />
  </div>
</template>

<script>
import GroupHeader from './group/GroupHeader'
import GroupItems from './group/GroupItems'
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
}
</script>

<style scoped></style>
