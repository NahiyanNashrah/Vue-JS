<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement({by:2,duration:1500})">Async Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({by:1,duration:1500})">Async Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"])
  }
};
</script>
