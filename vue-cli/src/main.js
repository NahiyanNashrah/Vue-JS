import Vue from "vue";
import App from "./Creating directives/App.vue";
// import App from "./Handling User Input with Forms/App.vue";
// //import App from "./Wonderful Quotes/App.vue";
// //import App from "./advancedComponentUsage/App.vue";
// import App from "./App.vue";
// export const eventBus = new Vue();
new Vue({
  el: "#app",
  render: h => h(App)
});
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    el.style.background = "green";
  }
});
