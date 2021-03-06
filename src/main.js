import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
// import icon from "@/components/icon.vue"
// Vue.component("icon", icon);
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Datefilter from '@/filters/date.js'
Vue.filter('date',Datefilter)
Vue.use(Vuelidate)

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
}) 

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
