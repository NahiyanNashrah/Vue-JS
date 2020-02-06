var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>'
  },
  methods: {
    changeMessage: function(event) {
      this.message = 'Hello!';
      return this.message;
    }
  }
});

// dynamically bounding title on hovering
// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// });
