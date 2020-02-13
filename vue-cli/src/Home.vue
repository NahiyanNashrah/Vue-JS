<template>
  <div>
    <h2>Server status: {{ status }}</h2>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "normal";
    }
  }
};
</script>

<style>
</style>