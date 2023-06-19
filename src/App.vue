<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <nav>
        <RouterLink to="/products">Ver Produtos</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/logout">Sair</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.header {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.header .wrapper {
  display: flex;
  justify-content: space-between;
}

.header nav {
  display: flex;
  gap: 10px;
}

.header nav a {
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.header nav a:hover {
  background-color: #ddd;
}
</style>
