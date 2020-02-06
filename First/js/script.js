// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!',
//     link: 'https://google.com'
//   },
//   methods: {
//     changeMessage: function(event) {
//       return this.message;
//     }
//   }
// });

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});
