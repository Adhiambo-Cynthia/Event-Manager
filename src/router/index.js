import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";
import NProgress from "nprogress";
import store from "@/store/index";

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
    props: true,
    //this method removes the need to do this from our component and instead do it from our route
    beforeEnter(routeTo, routeFrom, next) { // before this route is loaded
      store.dispatch('events/fetchEvent', routeTo.params.id).then(() => {
        next()
      })
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});
router.beforeEach((routeTo, routeFrom, next) => {
  // Start the route progress bar.
  NProgress.start();
  next();
});
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
