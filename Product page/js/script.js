Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
        <div class="product-image">
          <img v-bind:src="image" />
        </div>

        <div class="product-info">
          <h1>{{ title }}</h1>
          <!-- <p>{{ description }}</p> -->
          <p>Shipping: {{ shipping }}</p>

          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p>
          <p v-else :class="{outOfStock : inventory <= 0}">Out of Stock</p>

          <ul>
            <li v-for="item in details">{{ item }}</li>
          </ul>

          <h3>Available Colors</h3>
          <!-- style="{backgroundColor:item.color ==> style = "background-color : blue" -->
          <div
            v-for="(item, index) in variants"
            v-bind:key="item.id"
            class="color-box"
            v-bind:style="{backgroundColor:item.color}"
            v-on:mouseover="updateColor(index)"
          ></div>
          <button
            v-on:click="addToCart"
            v-bind:disabled="inventory <= 0"
            v-bind:class="{disabledButton: inventory <= 0}"
          >
            Add To Cart
          </button>
          
        </div>
      </div>
    `,
  data() {
    return {
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
      ]
    };
  },
  methods: {
    addToCart() {
      // if (this.variants[this.selectedVariants].quantity > 0) {
      //   this.cart++;
      //   this.variants[this.selectedVariants].quantity--;
      // }
      this.$emit('add-to-cart', this.variants[this.selectedVariants].id);
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
    },
    shipping() {
      if (this.premium) {
        return 'free';
      }
      {
        return 2.99;
      }
    }
  }
});
var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    // updateCart(id, amount) {
    //   if (amount > 0) {
    //     this.cart.push(id);
    //     amount--;
    //   }
    // }
    updateCart(id) {
      if (id > 0) {
        this.cart.push(id);
      }
    }
  }
});
