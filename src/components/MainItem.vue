<template>
  <div class="container">
    <img
      src="../assets/logo-mastercraft.svg"
      alt="Mastercraft logo"
      class="mastercraft-logo"
    />
    <h1>Mastercraft Bamboo Monitor Riser</h1>
    <p>
      A beautifully handcrafted monitor stand to reduce neck and eye strain.
    </p>
    <div class="split">
      <base-button class="teal" @showModal="$emit('showModal')">
        Back this project
      </base-button>
      <div class="buttonSpan">
        <base-button class="icon" mode="icon" @bookmarkApp="bookmark">
          <img :src="imgSrc" alt="Bookmark icon" id="bookmark" />
        </base-button>
        <span
          id="bookmark-span"
          :class="{ active: this.$store.getters.getBookmark }"
          >{{ bookmarkStatus }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./ui/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },

  data() {
    return {
      imgSrc: require("@/assets/icon-bookmark.svg"),
      bookmarkStatus: "Bookmark",
    };
  },

  methods: {
    bookmark() {
      this.$store.dispatch("switchBookmark");
      if (this.$store.getters.getBookmark) {
        this.imgSrc = require("@/assets/icon-bookmarked.svg");
        this.bookmarkStatus = "Bookmarked";
      } else {
        this.imgSrc = require("@/assets/icon-bookmark.svg");
        this.bookmarkStatus = "Bookmark";
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  background-color: var(--clr-neutral-100);
  border-radius: 10px;
  padding: 2rem 1rem;
  margin-inline: auto;
  margin-top: -3.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.mastercraft-logo {
  width: 60px;
  height: 60px;
  margin-inline: auto;
  margin-top: -4rem;
  margin-bottom: 1rem;
}

.split {
  flex-direction: row;
  justify-content: space-evenly;
}

.buttonSpan {
  display: flex;
  align-items: center;
}

#bookmark-span {
  padding: 0.5rem 1.5rem 0.5rem 1rem;
}

@media (min-width: 1440px) {
  .container {
    width: 50%;
  }

  .split {
    justify-content: space-between;
    padding-inline: 3rem;
  }

  #bookmark-span {
    display: flex;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    color: var(--clr-neutral-500);
    align-items: center;
    justify-content: center;
  }

  #bookmark-span.active {
    color: var(--clr-primary);
  }
}
</style>
