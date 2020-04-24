import EventServices from "@/services/EventServices.js";
export const namespaced = true;
export const state = {
  events: [],
  event: {},
  totalEvents: null
};
export const getters = {
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
  },
  // EDIT_EVENT: (state, event, id) => {
  //   state.events.append(event => event.id === id);
  // }
  DELETE_EVENT: (state, id) => {
    state.events.splice(id, 1)
  }
};
export const actions = {
  createEvent: ({ commit, dispatch }, event) => {
    return EventServices.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        const notification = {
          type: "success",
          message: "Event created successfully"
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch(error => {
        console.log("There was a problem creating your event" + error.message);
        const notification = {
          type: "error",
          message: "There was a problem creating your event" + error.message
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventServices.getEvents(perPage, page)
      .then(response => {
        console.log("Total Events are " + response.headers["x-total-count"]);
        commit("TOTAL_EVENTS", response.headers["x-total-count"]);
        commit("SET_EVENTS", response.data);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching events" + error.message
        };
        dispatch("notification/add", notification, { root: true }); //dispatching the error to the notification module
        console.log("There was an error:", error.response); // Logs out the error
      });
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id);
    if (event) {
      commit("SET_EVENT", event);
    } else {
      return EventServices.getEvent(id).then(response => {
        commit("SET_EVENT", response.data);
      });
      //removed so that we can use the 404 page instead
      // .catch(error => {
      //   const notification = {
      //     type: "error",
      //     message: "There was a problem fetching this event" + error.message
      //   };
      //   dispatch("notification/add", notification, { root: true });
      //   console.log("An error occurred", error.response);
      // });
    }
  },
  deletetheEvent({ commit }, id) {
    EventServices.deleteEvent(id).then(commit("DELETE_EVENT", id));
  },
  edittheEvent({ commit }, event, id) {
    EventServices.editEvent(event, id).then(commit("EDIT_EVENT", (event, id)));
  }
};
