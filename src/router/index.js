import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Events",
    component: Events
  },
  {
    path: "/create_event",
    name: "CreateEvent",
    component: () => import("../views/Create.vue")
    // alias: "/about"
  },
  {
    path: "/show_event/:id",
    name: "ShowEvent",
    component: () => import("../views/ShowEvent.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
