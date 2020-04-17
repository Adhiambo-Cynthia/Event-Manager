import Vue from "vue";
import Vuex from "vuex";

import * as user from "@/store/modules/user.js";
import * as events from "@/store/modules/events.js";
import * as notification from "@/store/modules/notification.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    events,
    notification
  },
  state: {
    categories: [
      "Technology and science",
      "Food and nutrition",
      "Bussiness and Entrepreneurship"
    ]
  }
  
  
});
