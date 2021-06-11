<template>
  <div class="container">
    <div class="split">
      <h4>{{ title }}</h4>
      <p class="pledge" v-show="amount != null">Pledge ${{ amount }} or more</p>
    </div>
    <p>{{ description }}</p>
    <div class="split button">
      <p class="quantity" v-show="quantity != null">
        <span>{{ quantity }}</span> left
      </p>
      <base-button
        class="teal"
        :disabled="quantity == 0"
        @showModal="updateActivePledge"
      >
        Select Reward
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "./ui/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },

  methods: {
    updateActivePledge() {
      this.$emit("onUpdate", this.id);
    },
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  border: 2px solid var(--clr-neutral-300);
  padding: 2rem 1.5rem;
  border-radius: 10px;
}

h4,
p {
  text-align: start;
  padding: 0;
}

h4 {
  padding-bottom: 0.3rem;
}

p {
  display: flex;
  align-items: center;
}

.quantity {
  padding-top: 1rem;
}

span {
  font-weight: var(--fw-bold);
  font-size: var(--fs-statistics);
  color: var(--clr-neutral-900);
  margin-right: 0.5rem;
}

.split {
  flex-direction: column;
  margin-bottom: 1rem;
}

.pledge {
  color: var(--clr-primary);
  font-weight: var(--fw-medium);
}

.teal {
  margin-top: 1.5rem;
  padding: 1.1rem;
  width: 55%;
}

@media (min-width: 1440px) {
  .container {
    padding: 2rem 2.3rem;
  }

  .split {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .pledge {
    padding-top: 0;
  }

  .teal {
    width: unset;
    padding: 1.1rem 3rem;
  }
}
</style>
