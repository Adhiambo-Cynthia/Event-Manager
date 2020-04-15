import Vue from "vue";
import Vuex from "vuex";
import EventServices from "@/services/EventServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: "10021",
      name: "Cynthia Adhiambo"
    },
    categories: [
      "Technology and science",
      "Food and nutrition",
      "Bussiness and Entrepreneurship"
    ],
    events: []
  },
  getters: {
    totalusers: state => {
      return state.users.length;
    }
  },
  mutations: {
    ADD_EVENT: (state, event) => {
      state.events.push(event);
    },
    SET_EVENTS: (state, events) => {
      state.events = events;
    }
  },
  actions: {
    createEvent: ({ commit }, event) => {
      return EventServices.postEvent(event).then(() =>
        commit("ADD_EVENT", event)
      );
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventServices.getEvents(perPage, page)
        .then(response => {
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response); // Logs out the error
        });
    }
  },
  modules: {}
});
