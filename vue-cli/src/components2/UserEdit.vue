<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age is: {{ myAge }}</p>
    <button @click="editAge">Edit Age with emit</button>
    <button @click="resetAgeFn()">Edit Age with callback</button>
    <button @click="updateAge">Edit Age with central object</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    myAge: {
      type: Number
    },
    resetAgeFn: Function
  },
  data() {
    return {};
  },
  methods: {
    editAge() {
      this.myAge = 30;
      this.$emit("resetAge", this.myAge);
    },
    updateAge() {
      this.myAge = 30;
      eventBus.$emit("ageUpdate", this.myAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
