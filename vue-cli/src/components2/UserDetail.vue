<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Name is: {{ myName }}</p>
    <p>Age is: {{ myAge }}</p>

    <button @click="resetName">Reset Name with emit</button>
    <button @click="resetFn()">Reset Name with callback</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      required: true
    },
    myAge: Number,
    resetFn: Function
  },
  data() {
    return {};
  },
  methods: {
    resetName() {
      this.myName = "Mili";
      this.$emit("nameReset", this.myName);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
