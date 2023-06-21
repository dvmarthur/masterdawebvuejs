export default {
  data() {
    return {
      products: [],
      cartItems: [],
    };
  },
  mounted() {
    this.products = this.generateRandomProducts(3);
  },
  methods: {
    generateRandomProducts(count) {
      const products = [];
      for (let i = 0; i < count; i++) {
        const product = {
          id: i + 1,
          name: `Produto ${i + 1}`,
        };
        products.push(product);
      }
      return products;
    },
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = {
          id: product.id,
          name: product.name,
          quantity: 1,
        };
        this.cartItems.push(newItem);
      }
    },
    removeFromCart(item) {
      const index = this.cartItems.indexOf(item);
      if (index > -1) {
        this.cartItems.splice(index, 1);
      }
    },
  },
};

