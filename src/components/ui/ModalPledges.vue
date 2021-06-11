<template>
  <div class="container-modal">
    <div class="split">
      <h3>Back this project</h3>
      <img
        src="../../assets/icon-close-modal.svg"
        alt="Close modal icon"
        @click="$emit('closeModal')"
      />
    </div>
    <p>
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
      world?
    </p>
    <div>
      <radio-pledges
        v-for="pledge in pledges"
        :key="pledge.id"
        :id="pledge.id"
        :title="pledge.title"
        :amount="pledge.amount"
        :description="pledge.description"
        :quantity="pledge.quantity"
        :class="{ noStock: pledge.quantity == 0 }"
        @onUpdate="updateActivePledge"
        @finishPledge="finishPledge"
      ></radio-pledges>
    </div>
  </div>
</template>

<script>
import RadioPledges from "./RadioPledges.vue";

export default {
  components: {
    RadioPledges,
  },
  computed: {
    pledges() {
      return this.$store.getters["pledges/pledges"];
    },
  },
  methods: {
    finishPledge() {
      this.$emit("finishPledge");
    },
    updateActivePledge(pledge) {
      this.$store.dispatch("updateActivePledge", pledge);
    },
  },
};
</script>

<style scoped>
.container-modal {
  width: 90%;
  position: absolute;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);
  top: 5rem;
  background-color: var(--clr-neutral-100);
  border-radius: 10px;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  padding-inline: 1.5rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
}

img {
  cursor: pointer;
}

p {
  text-align: start;
  padding-bottom: 1rem;
  padding-inline: 0;
}

.split {
  justify-content: space-between;
  padding-top: 1rem;
}

@media (min-width: 1440px) {
  .container-modal {
    width: 50%;
    top: 10rem;
  }
}
</style>
