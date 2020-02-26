import Vue from "vue";

//State;
import App from "./State Management/App.vue";
import { store } from "./State Management/store/store";
new Vue({
  el: "#app",
  store: store,
  render: h => h(App)
});

//    Routing
// import App from "./Routing/App.vue";
// import VueRouter from "vue-router";
// import { routes } from "./Routing/router";
// Vue.use(VueRouter);
// const router = new VueRouter({
//   routes: routes,
//   mode: "history",
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     }
//     if (to.hash) {
//       return { selector: to.hash };
//     }
//     return { x: 0, y: 0 };
//   }
// });
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   console.log("before Each");
//   next();
// });
// new Vue({
//   el: "#app",
//   router: router,
//   render: h => h(App)
// });

//Axios;
// import axios from "axios";
// import App from "./Axios/App.vue";
// import router from "./Axios/router";
// import store from "./Axios/store";
// axios.defaults.baseURL = "https://axios-2ae55.firebaseio.com";
// axios.defaults.headers.common["Authorization"] = "Authorized";
// axios.defaults.headers.get["Accepts"] = "application/json";
// new Vue({
//   el: "#app",
//   router,
//   store,
//   render: h => h(App)
// });

//    Filters & Mixins
// import App from "./Filters & Mixins/App.vue";
// Vue.mixin({
// created() {
//   console.log("Global mixin");
// }
// });

//     Handling User Input with Forms
// import App from "./Handling User Input with Forms/App.vue";

//    Wonderful Quotes
// import App from "./Wonderful Quotes/App.vue";

//    AdvancedComponentUsage
// import App from "./advancedComponentUsage/App.vue";

// import App from "./App.vue";
// export const eventBus = new Vue();

//   Creating directives
// import App from "./Creating directives/App.vue";
// Vue.directive("highlight", {
//   bind(el, binding, vnode) {
//     var delay = 0;

//     if (binding.modifiers["delayed"]) {
//       delay = 2500;
//     }
//     if (binding.modifiers["another"]) {
//       el.style.fontSize = "24px";
//       let style1 = "italic";
//       let style2 = "normal";
//       let current = style1;
//       setTimeout(() => {
//         setInterval(() => {
//           current == style1 ? (current = style2) : (current = style1);
//           el.style.fontStyle = current;
//           if (binding.arg == "background") {
//             el.style.backgroundColor = binding.value;
//           } else {
//             el.style.color = binding.value;
//           }
//         }, 1000);
//       }, delay);
//     } else {
//       setTimeout(() => {
//         if (binding.arg == "background") {
//           el.style.backgroundColor = binding.value;
//         } else {
//           el.style.color = binding.value;
//         }
//       }, delay);
//     }
//   }
// });

// new Vue({
//   el: "#app",
//   render: h => h(App)
// });
