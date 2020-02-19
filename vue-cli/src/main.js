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

    if (binding.modifiers["delayed"]) {
      delay = 2500;
    }
    if (binding.modifiers["another"]) {
      el.style.fontSize = "24px";
      let style1 = "italic";
      let style2 = "normal";
      let current = style1;
      setTimeout(() => {
        setInterval(() => {
          current == style1 ? (current = style2) : (current = style1);
          el.style.fontStyle = current;
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, 1000);
      }, delay);
    } else {
      setTimeout(() => {
        if (binding.arg == "background") {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, delay);
    }
  }
});
new Vue({
  el: "#app",
  render: h => h(App)
});
