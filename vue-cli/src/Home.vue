<template>
  <div class="servers">
    <server-status v-for="server in 5" :key="server.id"></server-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  components: {
    "server-status": ServerStatus
  }
};
</script>

<style>
</style>