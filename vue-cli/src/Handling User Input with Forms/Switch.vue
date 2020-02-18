<template>
  <div class="switch">
    <div id="on" @click="switched(true)" :class="{active: value}">On</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
  </div>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    switched(status) {
      this.$emit("input", status);
    }
  }
};
</script>
<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin: 10px -2px;
  box-sizing: content-box;
}
#on:hover,
#on.active {
  background-color: lightpink;
}
#off:hover,
#off.active {
  background-color: lightseagreen;
}
</style>