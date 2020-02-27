<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <button class="btn btn-primary" v-show="!show" @click="load">Show Posts</button>
      <app-show-post></app-show-post>
    </div>
  </div>
</template>


<script>
import ShowPosts from "./components/ShowPosts";
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    "app-show-post": ShowPosts
  },
  methods: {
    load() {
      this.show = true;
      this.$store.dispatch("load");
    }
  }
};
</script>