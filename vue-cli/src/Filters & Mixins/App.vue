<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUpper }}</p>
      </div>
    </div>
    <hr />
    <input type="text" v-model="filteredText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}</li>
    </ul>
    <hr />
    <app-list></app-list>
  </div>
</template>

<script>
import List from "./List";
import { fruitMixin } from "./fruitMixin";
export default {
  data() {
    return {
      text: "Filters & Mixins"
    };
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  components: {
    "app-list": List
  },
  mixins: [fruitMixin]
};
</script>

<style>
</style>
