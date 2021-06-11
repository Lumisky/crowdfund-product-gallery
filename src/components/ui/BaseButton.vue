<template>
  <button :class="mode" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    continue: {
      required: false,
      default: false,
    },
  },

  methods: {
    handleClick() {
      if (this.mode == "continue") {
        this.$emit("handlePledge");
      } else if (this.mode == "icon") {
        this.$emit("bookmarkApp");
      } else if (this.mode == "close") {
        this.$emit("closeSuccessModal");
      } else {
        this.$emit("showModal");
      }
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 50px;
  font-weight: var(--fw-bold);
  border: none;
  padding: 1.1rem 3rem;
  font-size: var(--fs-button);
}

button:hover {
  cursor: pointer;
}

.teal {
  background-color: var(--clr-primary);
  color: var(--clr-neutral-100);
}

.teal:hover {
  background-color: var(--clr-primary-dark);
}

.teal:disabled {
  background-color: var(--clr-neutral-300);
  cursor: unset;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
}

.icon span {
  display: none;
}

.icon:hover {
  opacity: 0.7;
}
</style>
