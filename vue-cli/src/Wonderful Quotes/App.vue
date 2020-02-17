<template>
  <div class="container">
    <app-header
      :quotesCount="quotesArr.length"
      :maxQuotes="maxQuotes"
    ></app-header>
    <app-new-quote @addQuote="showQuote($event)"></app-new-quote>
    <app-quote-grid
      :quotes="quotesArr"
      @delQuote="quoteDelete"
    ></app-quote-grid>
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
import Header from "../Wonderful Quotes/components/Header";

export default {
  data() {
    return {
      quotesArr: [],
      maxQuotes: 10
    };
  },
  components: {
    "app-quote-grid": QuoteGrid,
    "app-new-quote": NewQuote,
    "app-header": Header
  },
  methods: {
    showQuote(quote) {
      if (this.quotesArr.length < 10) {
        this.quotesArr.push(quote);
      } else {
        alert("Please delete some quote first");
      }
    },
    quoteDelete(index) {
      this.quotesArr.splice(index, 1);
    }
  }
};
</script>

<style></style>
