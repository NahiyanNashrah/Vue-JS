import Vue from "vue";
import App from "./Creating directives/App.vue";
// import App from "./Handling User Input with Forms/App.vue";
// //import App from "./Wonderful Quotes/App.vue";
// //import App from "./advancedComponentUsage/App.vue";
// import App from "./App.vue";
// export const eventBus = new Vue();
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    var delay = 0;

    if (binding.arg == "background") {
      delay = 2500;
      setTimeout(() => {
        el.style.backgroundColor = binding.value;
      }, delay);
    } else {
      el.style.color = binding.value;
    }
  }
});
new Vue({
  el: "#app",
  render: h => h(App)
});
