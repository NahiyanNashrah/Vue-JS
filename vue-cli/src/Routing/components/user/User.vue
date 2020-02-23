<template>
  <div class="User">
    <h1>The User Page</h1>
    <hr />
    <router-view></router-view>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
