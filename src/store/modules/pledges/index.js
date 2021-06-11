import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      pledges: [
        {
          id: 0,
          title: "Pledge with no reward",
          description:
            "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        },
        {
          id: 1,
          title: "Bamboo Stand",
          amount: 25,
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
          quantity: 101,
        },
        {
          id: 2,
          title: "Black Edition Stand",
          amount: 75,
          description:
            "You get a Black Special Edition computer and a personal thank you. You'll be added to a special Backer member list. Shipping is included",
          quantity: 64,
        },
        {
          id: 3,
          title: "Mahogany Special Edition",
          amount: 200,
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you! You'll be added to a special Backer member list. Shipping is included",
          quantity: 0,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
