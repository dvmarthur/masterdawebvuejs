<template>
  <header class="header">
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <template v-if="token">
          <RouterLink to="/products">Ver Produtos</RouterLink>
          <button @click="logout">Sair</button>
        </template>
        <template v-else>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/register">Registrar</RouterLink>
        </template>
      </nav>
    </div>
  </header>
  <RouterView />
</template>


<style scoped>
@import '@/assets/css/app.css';
@import 'bootstrap/dist/css/bootstrap.css';

</style>


<script src="@/js/App.js"></script>
