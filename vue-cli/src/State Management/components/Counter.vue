<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      return this.$store.state.counter++;
    },
    decrement() {
      return this.$store.state.counter--;
    }
  }
};
</script>
