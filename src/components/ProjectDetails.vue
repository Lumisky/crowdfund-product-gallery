<template>
  <div class="container">
    <h3>About this project</h3>
    <p>
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
      elevates your screen to a more comfortable viewing height. Placing your
      monitor at eye level has the potential to improve your posture and make
      you more comfortable while at work, helping you stay focused on the task
      at hand.
    </p>
    <p>
      Featuring artisan craftsmanship, the simplicity of design creates extra
      desk space below your computer to allow notepads, pens, and USB sticks to
      be stored under the stand.
    </p>
    <div class="split">
      <item-pledges @showModal="showModal"></item-pledges>
    </div>
  </div>
</template>

<script>
import ItemPledges from "./ItemPledges.vue";

export default {
  components: {
    ItemPledges,
  },
  methods: {
    showModal(activePledge) {
      this.$emit("showModal", activePledge);
    },
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  background-color: var(--clr-neutral-100);
  border-radius: 10px;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  padding-inline: 1.5rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

h3,
p {
  text-align: start;
}

h3 {
  padding-top: 1rem;
  padding-inline: 0.5rem;
}

@media (min-width: 1440px) {
  .container {
    width: 50%;
    padding-top: 2rem;
    padding-inline: 3rem;
  }

  p:nth-child(3) {
    padding-top: 0rem;
    padding-bottom: 2rem;
  }
}
</style>
