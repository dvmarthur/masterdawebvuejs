<template>
  <div>
    <div class="background-card">
      <h2 class="title">Listagem de Produtos</h2>
      <div class="product-card" v-for="product in products" :key="product.id">
        <p class="product-name">{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // Lógica para obter a listagem de produtos aleatórios
    // Aqui você pode fazer uma requisição a uma API ou gerar dados aleatórios localmente
    // Para este exemplo, vamos gerar dados aleatórios localmente
    this.products = this.generateRandomProducts(3);
  },
  methods: {
    generateRandomProducts(count) {
      // Lógica para gerar produtos aleatórios
      // Aqui você pode implementar sua própria lógica para gerar os produtos
      // Neste exemplo, estamos gerando produtos fictícios com nomes aleatórios
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
  },
};
</script>

<style scoped>
.background-card {
  background-color: red;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}

.title {
  color: white;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

.product-card {
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.product-name {
  font-size: 16px;
  margin: 0;
}
</style>
