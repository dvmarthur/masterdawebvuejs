<template>
    <h1 class="mb-5 text-center">Login</h1>
  <form @submit="submitForm" class="mt-5">
    <div class="form-group">
      <input type="email" v-model="email" class="form-control form-control-lg  mt-5" placeholder="Email" />
    </div>
    <div class="form-group">
      <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary btn-lg btn-block">
      <i class="bi bi-person-fill me-2"></i> Login
    </button>
  </form>
</template>

<style scoped>
@import '@/assets/css/login.css';

</style>

<script src="@/js/Login.js"></script>

