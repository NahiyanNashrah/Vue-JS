import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex, Axios);
export const store = new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    showPosts(state) {
      return state.posts;
    }
  },
  actions: {
    load(context) {
      Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          const posts = response.data;
          console.log(posts);
          context.commit("setPosts", posts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    setPosts(state, post) {
      state.posts = post;
    }
  }
});
