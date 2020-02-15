<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age is: {{ myAge }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
export default {
  props: ["myAge"],
  data() {
    return {};
  },
  methods: {
    editAge() {
      this.myAge = 30;
      this.$emit("resetAge", this.myAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
