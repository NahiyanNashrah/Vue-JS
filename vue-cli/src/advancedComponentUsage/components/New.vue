<template>
  <div class="container">
    <h3>New Quote</h3>
    <button @click="counter++">Increase</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  created() {
    console.log("New component is created!");
  },
  destroyed() {
    console.log("New component is destroyed!");
  },
  activated() {
    console.log("New component is activated!");
  },
  deactivated() {
    console.log("New component is deactivated!");
  }
};
</script>

<style>
</style>
