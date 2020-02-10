var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    message: 'Hello Vue!',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>',
    showTime: 'You loaded this page on ' + new Date().toLocaleString()
  },
  methods: {
    changeMessage: function(event) {
      // this.message = event.target.value;
      this.message = 'hello';
      return this.message;
    }
  }
});
