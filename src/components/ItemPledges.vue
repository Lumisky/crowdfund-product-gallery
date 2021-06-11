<template>
  <div>
    <Pledge
      v-for="pledge in pledges"
      :key="pledge.id"
      v-show="pledge.id != 0"
      :id="pledge.id"
      :title="pledge.title"
      :amount="pledge.amount"
      :description="pledge.description"
      :quantity="pledge.quantity"
      :class="{ noStock: pledge.quantity == 0 }"
      @onUpdate="showModal"
    />
  </div>
</template>

<script>
import Pledge from "./Pledge";

export default {
  components: {
    Pledge,
  },
  computed: {
    pledges() {
      return this.$store.getters["pledges/pledges"];
    },
  },
  methods: {
    showModal(activePledge) {
      this.$emit("showModal", activePledge);
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 2rem;
}

p {
  padding: 0;
}

.outOfStock {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (min-width: 1440px) {
  div {
    width: 98%;
    margin-inline: auto;
  }
}
</style>
