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
.header {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; /* Valor alto para ficar acima de tudo */

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

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import Swal from 'sweetalert2';



export default {
  data() {
    return {
      token: null
    };
  },
  methods: {
    logout() {
      axios
        .post('http://localhost:8000/api/logout', null, {
          headers: {
            Authorization: `Bearer ${this.token}`, // Adicione o token ao cabeçalho da solicitação
          },
        })
        .then(() => {
          localStorage.removeItem('token');
          Swal.fire('Deslogado', '', 'success').then(() => {
            window.location.href = '/login';
          });
        })
        .catch(error => {
          console.error(error);
          // Trate qualquer erro de solicitação ou faça a lógica de tratamento adequada
        });
    },
  },
  created() {
    this.token = localStorage.getItem('token'); // Obtenha o token do Local Storage
  },
};
</script>
