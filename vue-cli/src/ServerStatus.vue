<template>
  <div class="server-status">
    <h3>Server status: {{status}}</h3>
    <button @click="changeStatus">Change Status</button>
    <hr />
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