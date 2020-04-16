import EventServices from "@/services/EventServices.js";
export const namespaced=true
export const state = {
  events: [],
  event: {},
  totalEvents: null
};
export const getters = {
  totalusers: state => {
    return state.users.length;
  },
  getEventById: state => id => {
    return state.events.find(event => event.id === id);
  }
};
export const mutations = {
  ADD_EVENT: (state, event) => {
    state.events.push(event);
  },
  SET_EVENTS: (state, events) => {
    state.events = events;
  },
  SET_EVENT: (state, event) => {
    state.event = event;
  },
  TOTAL_EVENTS: (state, total) => {
    state.totalEvents = total;
  }
};
export const actions = {
  createEvent: ({ commit }, event) => {
    return EventServices.postEvent(event).then(() =>
      commit("ADD_EVENT", event)
    );
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventServices.getEvents(perPage, page)
      .then(response => {
        console.log("Total Events are " + response.headers["x-total-count"]);
        commit("TOTAL_EVENTS", response.headers["x-total-count"]);
        commit("SET_EVENTS", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id);
    if (event) {
      commit("SET_EVENT", event);
    } else {
      EventServices.getEvent(id)
        .then(response => {
          commit("SET_EVENT", response.data);
        })
        .catch(error => console.log("An error occurred", error.response));
    }
  }
};
