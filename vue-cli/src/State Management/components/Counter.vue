<template>
  <div>
    <button class="btn btn-primary" @click="increment(4)">Increment Counter</button>
    <button class="btn btn-primary" @click="decrement(2)">Decrement Counter</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>
