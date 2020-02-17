<template>
  <div class="row">
    <app-quote
      v-for="(quote,index) in quotes"
      :key="quote.id"
      @click.native="deleteQuote(index)"
    >{{quote}}</app-quote>
  </div>
</template>
<script>
import Quote from "./Quote";
export default {
  props: ["quotes"],
  components: {
    "app-quote": Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("delQuote", index);
    }
  }
};
</script>
<style scoped></style>