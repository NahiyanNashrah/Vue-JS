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
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Filters & Mixins",
      fruits: ["Apple", "Banana", "Grape", "PineApple", "Mango", "Melon"],
      filteredText: ""
    };
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(item => {
        return item.match(this.filteredText);
      });
    }
  }
};
</script>

<style>
</style>
