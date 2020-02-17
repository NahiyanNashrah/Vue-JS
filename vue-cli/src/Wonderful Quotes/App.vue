<template>
  <div class="container">
    <app-quote-grid :quotes="quotesArr"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "../Wonderful Quotes/components/QuoteGrid";
export default {
  data() {
    return {
      quotesArr: ["A simple quote"],
      maxQuotes: 10
    };
  },
  components: {
    "app-quote-grid": QuoteGrid
  }
};
</script>

<style>
</style>
