<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("Quote component is created!");
  },
  destroyed() {
    console.log("Quote component is destroyed!");
  }
};
</script>
<style scoped>
div {
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: blueviolet;
}
.title {
  font-style: italic;
}
</style>