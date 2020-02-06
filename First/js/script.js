var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    changeMessage: function(event) {
      this.message = event.target.value;
    }
  }
});
app.message = 'data has changed!';
