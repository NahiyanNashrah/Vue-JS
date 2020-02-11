let PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String
    }
  }
};
Vue.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    };
  },
  components: {
    plan: PlanComponent
  }
});

new Vue({
  el: '#app'
});
