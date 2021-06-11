<template>
  <div
    class="container"
    :class="{ disabled: quantity == 0, active: choice == id }"
  >
    <div class="split">
      <input
        type="radio"
        name="pledge-type"
        :id="id"
        :disabled="quantity == 0"
        :value="id"
        :checked="choice == id"
        @change="updateActivePledge"
      />
      <div class="modal-header">
        <h4>{{ title }}</h4>
        <p class="pledge" v-show="amount != null">
          Pledge ${{ amount }} or more
        </p>
      </div>
    </div>
    <p class="description">{{ description }}</p>
    <p class="quantity" v-show="quantity != null">
      <span>{{ quantity }}</span> left
    </p>
    <div class="enter-pledge" v-show="choice == id">
      <hr v-show="quantity > 0" />
      <p v-show="quantity > 0">Enter your pledge</p>
      <div class="pledge-split">
        <div class="input" v-show="quantity > 0">
          <span class="currency">$</span
          ><input
            type="number"
            name="pledge"
            id="pledge"
            :min="amount"
            :placeholder="amount"
            v-model.number="pledgeAmount"
          />
        </div>
        <base-button class="teal" mode="continue" @handlePledge="finalizePledge"
          >Continue</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
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
  data() {
    return {
      pledgeAmount: "",
    };
  },

  computed: {
    choice() {
      return this.$store.getters.getChoice;
    },
  },
  methods: {
    finalizePledge() {
      this.$emit("finishPledge");
      if ((this.pledgeAmount == "")) {
        this.pledgeAmount = this.amount;
      }
      this.$store.dispatch("makePledge", this.pledgeAmount);
    },
    updateActivePledge() {
      this.$emit("onUpdate", this.id);
    },
  },
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.container {
  width: 100%;
  border: 2px solid var(--clr-neutral-300);
  padding: 2rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.container.active {
  border: 2px solid var(--clr-primary);
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
  justify-content: flex-start;
  color: var(--clr-neutral-500);
}

.quantity {
  padding-block: 1rem;
}

span {
  font-weight: var(--fw-bold);
  font-size: 1.3rem;
  color: var(--clr-neutral-900);
  margin-right: 0.5rem;
}

hr {
  border-color: var(--clr-neutral-300);
  width: 100%;
  margin-bottom: 1.5rem;
  opacity: 0.2;
}

.split {
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
.modal-header {
  flex-direction: column;
  padding-left: 1rem;
}

.pledge {
  color: var(--clr-primary);
  font-weight: var(--fw-medium);
  display: flex;
  flex-direction: column;
}

.enter-pledge {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pledge-split {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.enter-pledge p {
  margin-bottom: 1rem;
}

input[type="number"] {
  width: 100%;
  border: none;
  -moz-appearance: textfield;
  text-align: start;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-900);
  font-size: 1rem;
}

input[type="number"]:focus {
  outline: none;
  caret-color: var(--clr-primary);
}

.currency {
  font-size: var(--fs-default);
  color: var(--clr-neutral-500);
  font-weight: var(--fw-medium);
  padding-left: 0.5rem;
}

.input {
  display: flex;
  align-items: center;
  border-radius: 50px;
  border: 2px solid var(--clr-neutral-300);
  width: 35%;
  padding-block: 1rem;
  padding-inline: 0.5rem;
  margin-right: 1rem;
}

@media (min-width: 1440px) {
  .modal-header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1rem;
  }

  .modal-header h4:hover {
    color: var(--clr-primary);
    cursor: pointer;
  }

  h4 {
    padding-bottom: 0rem;
    padding-right: 2rem;
  }

  .container {
    position: relative;
  }

  .quantity {
    position: absolute;
    right: 3rem;
    top: 1rem;
  }
  .description {
    padding-left: 1.8rem;
  }

  .enter-pledge {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0rem;
    margin-top: 2rem;
    border-top: 2px solid var(--clr-neutral-300);
  }

  .enter-pledge hr {
    display: none;
  }

  .pledge-split {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }

  .enter-pledge p {
    margin-bottom: 0rem;
    margin-top: 1rem;
  }

  .input {
    width: 25%;
  }
}
</style>
