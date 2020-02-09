//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    // description: 'A pair of warm, fuzzy socks'
    image: './vmSocks-green-onWhite.jpg',
    inventory: '',
    details: ['80% cotton', '20% polyester', 'Gender neutral'],
    variants: [
      {
        id: '1',
        color: 'Green',
        image: './vmSocks-green-onWhite.jpg',
        inventory: '10'
      },
      {
        id: '2',
        color: 'Blue',
        image: './vmSocks-blue-onWhite.jpg',
        inventory: '15'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      if (this.inventory > 0) {
        this.cart++;
        this.inventory--;
      }
    },
    updateColor: function(variantsImage, variantInventory) {
      this.image = variantsImage;
      this.inventory = variantInventory;
    }
  }
});
