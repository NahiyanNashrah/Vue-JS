<template>
  <div class="container">
    <app-new-quote @addQuote="showQuote($event,)"></app-new-quote>
    <app-quote-grid :quotes="quotesArr"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "../Wonderful Quotes/components/QuoteGrid";
import NewQuote from "../Wonderful Quotes/components/NewQuote";

export default {
  data() {
    return {
      quotesArr: ["A simple quote"],
      maxQuotes: 10
    };
  },
  components: {
    "app-quote-grid": QuoteGrid,
    "app-new-quote": NewQuote
  },
  methods: {
    showQuote(quote) {
      this.quotesArr.push(quote);
    }
  }
};
</script>

<style>
</style>
