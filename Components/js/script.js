let PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String
    },
    selected: {
      type: String
    }
  },
  methods: {
    hello() {
      this.$emit('select', this.name);
    }
  },
  computed: {
    isSelected() {
      return this.selected === this.name;
    }
  }
};
Vue.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null
    };
  },
  components: {
    plan: PlanComponent
  },
  methods: {
    selectPlan(planName) {
      this.selectedPlan = planName;
    }
  }
});

new Vue({
  el: '#app'
});
