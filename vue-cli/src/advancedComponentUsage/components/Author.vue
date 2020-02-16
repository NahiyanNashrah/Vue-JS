<template>
  <div class="container">
    <h3>The Author</h3>
  </div>
</template>

<script>
export default {
  created() {
    console.log("Author is created!");
  },
  destroyed() {
    console.log("Author is destroyed!");
  },
  activated() {
    console.log("Author component is activated!");
  },
  deactivated() {
    console.log("Author component is deactivated!");
  }
};
</script>

<style>
</style>
