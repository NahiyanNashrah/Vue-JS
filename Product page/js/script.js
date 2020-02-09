//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    // description: 'A pair of warm, fuzzy socks'
    brand: 'Vue Mastery',
    selectedVariants: '0',
    details: ['80% cotton', '20% polyester', 'Gender neutral'],
    variants: [
      {
        id: '1',
        color: 'Green',
        img: './vmSocks-green-onWhite.jpg',
        quantity: '10'
      },
      {
        id: '2',
        color: 'Blue',
        img: './vmSocks-blue-onWhite.jpg',
        quantity: '15'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      if (this.variants[this.selectedVariants].quantity > 0) {
        this.cart++;
        this.variants[this.selectedVariants].quantity--;
      }
    },
    updateColor: function(index) {
      this.selectedVariants = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariants].img;
    },
    inventory() {
      return this.variants[this.selectedVariants].quantity;
    }
  }
});
