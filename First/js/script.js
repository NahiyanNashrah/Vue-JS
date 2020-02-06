var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    link: 'https://google.com'
  },
  methods: {
    changeMessage: function(event) {
      return this.message;
    }
  }
});
