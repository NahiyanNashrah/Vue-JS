Vue.component('blog-post', {
  props: {
    attr: {
      type: Object
    }
  },
  template: `#blog-post-template`
});

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: 'First post' },
      { id: 2, title: 'Blogging with Vue', content: 'Second post' },
      { id: 3, title: 'Why Vue is so fun', content: 'Third post' }
    ],
    fontSize: 14
  }
});
