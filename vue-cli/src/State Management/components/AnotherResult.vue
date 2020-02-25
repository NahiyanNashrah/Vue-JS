<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Counter is: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["doubleCounter", "stringCounter"])

  // counter() {
  //   return this.$store.getters.doubleCounter;
  // },
  // stringCounter() {
  //   return this.$store.getters.stringCounter;
  // }
};
</script>
