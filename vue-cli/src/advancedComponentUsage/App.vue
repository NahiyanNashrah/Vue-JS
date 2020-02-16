<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent='app-quote'">Quote</button>
        <button @click="selectedComponent='app-author'">Author</button>
        <button @click="selectedComponent='app-newQuote'">New</button>

        <!-- <app-quote>
          <h2 slot="title">The Quote</h2>
          <p slot="content">A wonderful quote</p>
        </app-quote>-->
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data() {
    return {
      selectedComponent: "app-quote"
    };
  },
  components: {
    "app-quote": Quote,
    "app-author": Author,
    "app-newQuote": New
  }
};
</script>

<style>
</style>
