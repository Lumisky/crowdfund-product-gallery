<template>
  <div class="container">
    <div class="split">
      <p>
        <span>{{ moneyCollected }}</span> of $100,000 backed
      </p>
      <hr />
      <p>
        <span>{{ totalBackers }}</span> total backers
      </p>
      <hr />
      <p>
        <span>{{ daysLeft }}</span> days left
      </p>
    </div>
    <div class="progress">
      <div
        class="progress-bar"
        id="progress-bar"
        :style="{ width: percentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 50,
    };
  },
  created() {
    var intval = setInterval(() => {
      if (
        this.percentage <
        Math.round(this.$store.getters.getItemStats.backed / 1000)
      )
        this.percentage += 1.5;
      else clearInterval(intval);
    }, 10);
  },
  computed: {
    moneyCollected() {
      let money = "$" + this.$store.getters.getItemStats.backed + "";
      return money.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    totalBackers() {
      let total = "$" + this.$store.getters.getItemStats.backers + "";
      return total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    daysLeft() {
      return this.$store.getters.getItemStats.daysLeft;
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

.split {
  flex-direction: column;
}

p {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

hr {
  opacity: 0.6;
  width: 15%;
  margin-inline: auto;
}

span {
  font-size: var(--fs-statistics);
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-900);
  text-align: center;
}

.progress {
  width: 100%;
  height: 1rem;
  background-color: var(--clr-neutral-300);
  margin: 0 auto;
  border-radius: 50px;
}

.progress-bar {
  height: 1rem;
  background-color: var(--clr-primary);
  border-radius: 50px;
}

@media (min-width: 1440px) {
  .container {
    width: 50%;
  }
  .split {
    flex-direction: row;
    justify-content: flex-start;
  }
  p {
    margin-top: 1rem;
    padding-inline: 3rem;
    border-right: 2px solid var(--clr-neutral-300);
    padding-block: 0;
  }
  p:nth-child(5) {
    border-right: none;
  }

  hr {
    display: none;
  }

  .progress {
    margin: 2rem auto 0;
    width: 90%;
  }
}
</style>
