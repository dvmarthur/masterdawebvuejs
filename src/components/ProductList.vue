<template>
  <div>
    <h2>Listagem de Produtos</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
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
          name: `Produto ${i + 1}`
        };
        products.push(product);
      }
      return products;
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para o componente ProductList.vue */
</style>
