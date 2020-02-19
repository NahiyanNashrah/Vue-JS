<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input type="text" v-model="filteredText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin],
  created() {
    console.log("List.vue created");
  }
};
</script>

<style>
</style>
