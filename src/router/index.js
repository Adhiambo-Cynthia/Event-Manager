import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";
import NotFound from "../views/NotFound.vue";
import NetworkIssue from "../views/NetworkIssue.vue";
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
    path: "/edit_event/:id",
    name: "EditEvent",
    component: () => import("../views/EditEvent.vue"),
    props: true
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
      }).catch((error) => {
        if(error.reponse && error.response.status == 404){
          next({name: '404', params: {resource: "event"}})
        } else{
          next({ name: "NetworkIssue"})
        }
       
      
      })
    }
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true  //tells it to expect some parameters
  },
  {
    path: "*", //catch all navigation that doesn't match
    redirect: { name:"404", params: {resource: "page"}}
  },
  {
    path: "/Network_Issue",
    name: "NetworkIssue",
    component: NetworkIssue,
    props: true  //tells it to expect some parameters
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("../views/Example.vue")
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
