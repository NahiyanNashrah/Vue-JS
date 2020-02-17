<template>
  <div class="container">
    <app-new-quote @addQuote="showQuote($event)"></app-new-quote>
    <app-quote-grid :quotes="quotesArr" @delQuote="quoteDelete"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it</div>
      </div>
    </div>
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
    },
    quoteDelete(index) {
      this.quotesArr.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
