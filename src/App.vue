<template>
  <div id="app">
    <Header @overlayActive="activateOverlay"></Header>
    <modal-pledges
      v-show="selectionModal"
      @closeModal="showSelectionModal"
      @finishPledge="toggleSuccessModal"
    ></modal-pledges>
    <success-modal
      v-show="successModal"
      @closeModal="toggleSuccessModal"
    ></success-modal>
    <div :class="{ dimmed: overlay }"></div>
    <router-view @showModal="showSelectionModal"></router-view>
  </div>
</template>

<script>
import Header from "./components/ui/Header.vue";
import ModalPledges from "./components/ui/ModalPledges.vue";
import SuccessModal from "./components/ui/SuccessModal.vue";

export default {
  name: "App",
  components: {
    Header,
    ModalPledges,
    SuccessModal,
  },
  data() {
    return {
      selectionModal: false,
      successModal: false,
      overlay: false,
    };
  },
  methods: {
    showSelectionModal(pledge) {
      if (this.selectionModal) {
        this.$store.dispatch("updateActivePledge", pledge);
      }
      this.selectionModal = !this.selectionModal;
      this.activateOverlay();
      window.scrollTo(0, 0);
    },
    toggleSuccessModal() {
      if (this.selectionModal) {
        this.selectionModal = false;
        this.activateOverlay();
      }
      this.successModal = !this.successModal;
      this.activateOverlay();
      window.scrollTo(0, 0);
    },

    activateOverlay() {
      this.overlay = !this.overlay;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap");

:root {
  /* PRIMARY COLORS */
  --clr-primary: hsl(176, 50%, 47%);
  --clr-primary-dark: hsl(176, 72%, 28%);
  /* NEUTRAL COLORS */
  --clr-neutral-100: hsl(0, 0%, 100%);
  --clr-neutral-300: hsl(0, 0%, 92%);
  --clr-neutral-500: hsl(0, 0%, 48%);
  --clr-neutral-900: hsl(0, 0%, 0%);

  /* TYPOGRAPHY */
  --ff-default: "Commissioner", sans-serif;
  /* FONT SIZES */
  --fs-body: 1rem;
  --fs-h1: 1.5rem;
  --fs-button: 0.875rem;
  --fs-statistics: 2.3rem;
  /* FONT WEIGHTS */
  --fw-normal: 400;
  --fw-medium: 500;
  --fw-bold: 700;

  /* SCREEN WIDTH */
  --screen-mobile: 375px;
  --screen-desktop: 1440px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--clr-neutral-300);
}

h1,
h2,
h3,
h4 {
  color: var(--clr-neutral-900);
  text-align: center;
}

p {
  padding: 1.5rem 0.5rem;
  line-height: 1.7;
  text-align: center;
}

.dimmed {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--clr-neutral-900);
  opacity: 0.6;
}

.split {
  display: flex;
}

#app {
  font-family: var(--ff-default);
  font-size: var(--fs-body);
  font-weight: var(--fw-normal);
  color: var(--clr-neutral-500);
}

#app ul {
  list-style: none;
}

#app ul li a {
  text-decoration: none;
}
</style>
