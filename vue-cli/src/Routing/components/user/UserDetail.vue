<template>
  <div class="Userdetail">
    <h3>Some User Details</h3>
    <p>Loaded id: {{ $route.params.id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="link">Edit User</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: "editUser",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  }
};
</script>