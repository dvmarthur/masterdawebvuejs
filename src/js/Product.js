export default {
    props: ['product'],
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product);
      }
    }
  };