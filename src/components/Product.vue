<template>
  <div class="product-info">
    <button class="add-to-cart-btn" @click="addToCart">
      <i class="bi bi-plus bi-10x"></i>
    </button>
    <p class="product-nome">{{ product.nome }}</p>
  </div>
</template>

<script src="@/js/Product.js"></script>


<style scoped>
@import '@/assets/css/productlist.css';
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';

/* Estilos do componente aqui */
</style>
