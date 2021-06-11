import Vue from "vue";
import Vuex from "vuex";

import pledgesModule from "./modules/pledges/index.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    choice: -10,
    bookmarked: false,
    gallery: [],

    itemStats: {
      backed: 89914,
      backers: 5007,
      daysLeft: 56,
    },
  },

  getters: {
    getChoice() {
      return store.state.choice;
    },
    getBookmark() {
      return store.state.bookmarked;
    },
    getItemStats() {
      return store.state.itemStats;
    },
    getGallery: (state) => {
      return state.gallery;
    },
  },
  mutations: {
    setChoice(state, payload) {
      state.choice = payload;
    },
    setBookmark(state) {
      state.bookmarked = !state.bookmarked;
    },
    setNewStats(state, payload) {
      state.itemStats.backed = state.itemStats.backed + parseInt(payload);
      state.itemStats.backers++;
      state.selected = -10;
    },
    setGallery: (state, payload) => {
      state.gallery = payload;
    },
  },

  actions: {
    updateActivePledge(context, payload) {
      context.commit("setChoice", payload);
    },
    switchBookmark(context) {
      context.commit("setBookmark");
    },
    makePledge(context, payload) {
      context.commit("setNewStats", payload);
    },
    loadGallery: async (context) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
      );
      const responseData = await response.json();

      const gallery = [];
      for (const key in responseData) {
        const img = {
          id: key,
          title: responseData[key].title,
          url: responseData[key].url,
          thumbnailUrl: responseData[key].thumbnailUrl,
        };
        gallery.push(img);
      }
      context.commit("setGallery", gallery);
    },
  },

  modules: {
    pledges: pledgesModule,
  },
});

export default store;
