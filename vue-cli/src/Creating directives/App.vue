<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some strong text </strong>'"></p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed.another="'blue'">Color this text using custom directive</p>
        <p
          v-local-highlight:background.delayed.blink="{ primaryClr:'yellow',secondaryClr:'green',delay:'1000'}"
        >Color this text using locally registered directive</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;

        if (binding.modifiers["delayed"]) {
          delay = 3500;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.primaryClr;
          let anotherColor = binding.value.secondaryClr;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == mainColor
                ? (currentColor = anotherColor)
                : (currentColor = mainColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.primaryClr;
            } else {
              el.style.color = binding.value.primaryClr;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
