var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    changeMessage: function(event) {
      return this.message;
    }
  }
});
