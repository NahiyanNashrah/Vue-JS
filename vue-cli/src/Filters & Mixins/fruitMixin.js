export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Grape", "PineApple", "Mango", "Melon"],
      filteredText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(item => {
        return item.match(this.filteredText);
      });
    }
  },
  created() {
    console.log("fruitMixin created");
  }
};
