<template>
  <form @submit="submitForm" class="mt-4">
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input type="text" v-model="name" class="form-control form-control-lg" id="name" placeholder="Enter your name" />
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input type="email" v-model="email" class="form-control form-control-lg" id="email" placeholder="Enter your email" />
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password</label>
      <input type="password" v-model="password" class="form-control form-control-lg" id="password" placeholder="Enter your password" />
    </div>
    <button type="submit" class="btn btn-primary btn-lg btn-block">
      <i class="bi bi-person-plus-fill me-2"></i> Register
    </button>
  </form>
</template>

<style scoped>
@import '@/assets/css/register.css';

</style>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      axios
        .post('http://127.0.0.1:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(response => {
          const token = response.data.token; // Obtenha o token retornado na resposta

          localStorage.setItem('token', token);

          Swal.fire('Registrado', '', 'success').then(() => {
            // Redirecionar para a página de produtos após clicar em OK
            window.location.href = '/products';
          });
        })
        .catch(error => {
          // Trate erros de registro
        });
    },
  },
};
</script>
