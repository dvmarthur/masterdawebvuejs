<style scoped>
@import '@/assets/css/productlist.css';
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';

/* Estilos relacionados ao componente principal podem permanecer aqui */
</style>

<template>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h2 class="title">Listagem de Produtos</h2>
              <h3>Escolha uma das opções abaixo:</h3>
              <div class="product-card">
                <div class="row flex-column"> <!-- Adicione a classe flex-column aqui -->
                  <div class="col-md-12" v-for="product in products" :key="product.id">
                    <div class="product-info">
                      <button class=" add-to-cart-btn" @click="addToCart(product)"><i class="bi bi-plus bi-10x"></i></button>
                      <p class="product-name">{{ product.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4" v-if="cartItems.length > 0">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Checkout</h2>
              <div class="card-text">
                <div class="checkout-item" v-for="item in cartItems" :key="item.id">
                  <p class="quantity">{{ item.quantity }} x</p>
                  <p class="product-name">{{ item.name }}</p>
                  <button class="btn btn-danger remove-btn" @click="removeFromCart(item)"><i class="bi bi-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
</script>
