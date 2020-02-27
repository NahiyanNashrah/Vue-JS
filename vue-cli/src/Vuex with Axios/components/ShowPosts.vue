<template>
  <div>
    <div class="showPosts" v-for="post in showPosts" :key="post.id">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
      <hr />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["showPosts"])
  }
};
</script>