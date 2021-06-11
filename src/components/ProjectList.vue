<template>
  <div>
    <main-item @showModal="$emit('showModal')"></main-item>
    <item-stats></item-stats>
    <project-details @showModal="$emit('showModal')"></project-details>
  </div>
</template>

<script>
import MainItem from "./MainItem.vue";
import ItemStats from "./ItemStats.vue";
import ProjectDetails from "./ProjectDetails.vue";

export default {
  components: {
    MainItem,
    ItemStats,
    ProjectDetails,
  },
};
</script>
