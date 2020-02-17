<template>
  <div class="row">
    <app-quote v-for="quote in quotes" :key="quote.id">{{quote}}</app-quote>
  </div>
</template>
<script>
import Quote from "./Quote";
export default {
  props: ["quotes"],
  components: {
    "app-quote": Quote
  }
};
</script>
<style scoped></style>