<template>
  <div class="container">
    <div class="split">
      <img src="../../assets/logo.svg" alt="Crowdfund logo" class="logo" />
      <nav>
        <img
          src="../../assets/icon-hamburger.svg"
          alt="Menu icon"
          id="menu-icon"
          @click="openMenu"
          v-show="!isOpen"
        />
        <img
          src="../../assets/icon-close-menu.svg"
          alt="Menu icon"
          id="close-icon"
          @click="openMenu"
          v-show="isOpen"
        />
        <ul
          class="navigation-links"
          v-show="isOpen"
          :class="{ active: isOpen }"
        >
          <li><router-link to="/:notFound(.*)">About</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/">Get Started</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
//   name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
      this.$emit('overlayActive');
    },
    handleResize() {
      if (window.innerWidth >= 1440) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    if (window.innerWidth >= 1440) {
      this.isOpen = true;
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>


<style scoped>
.container {
  background: url(../../assets/image-hero-mobile.jpg) no-repeat , linear-gradient(var(--clr-neutral-500), var(--clr-neutral-100));
  background-size: cover;
  background-blend-mode: multiply;
  height: 35vh;
}

.split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
}

.navigation-links {
  flex-direction: column;
  background-color: var(--clr-neutral-100);
  border-radius: 0.5rem;
  /* padding: 1rem 2.5rem; */
  /* display: none; */
}

.navigation-links li,
.navigation-links li a {
  padding: 0.8rem 0.3rem;
  color: var(--clr-neutral-900);
  font-weight: var(--fw-medium);
  font-size: var(--fs-body);
  padding-left: 0.8rem;
  padding-block: 1.2rem;
}

.navigation-links.active {
  display: flex;
  z-index: 20;
  width: 80%;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 1500ms ease-out;
}

#menu-icon,
#close-icon,
.logo {
  cursor: pointer;
}

nav,
.logo {
  z-index: 20;
}

@media (min-width: 1440px) {
  /* Hero image with navigation container */
  .container {
    background: url(../../assets/image-hero-desktop.jpg) no-repeat , linear-gradient(var(--clr-neutral-500), var(--clr-neutral-100));
    background-size: cover;
    height: 50vh;
  }

  .split {
    padding: 4rem 11rem;
  }

  #menu-icon,
  #close-icon {
    display: none;
  }

  /* Navigation style */
  .navigation-links {
    flex-direction: row;
    background-color: transparent;
    justify-content: flex-end;
    /* padding: 1rem 2.5rem; */
  }

  .navigation-links li,
  .navigation-links li a {
    padding: 0.8rem 0.3rem;
    color: var(--clr-neutral-100);
    font-weight: var(--fw-medium);
    font-size: var(--fs-body);
    padding-left: 0.8rem;
    padding-block: 1.2rem;
  }

  .navigation-links.active {
    top: 3rem;
    flex-basis: 100%;
    align-items: center;
    justify-content: flex-end;
  }

  .logo {
    cursor: pointer;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
