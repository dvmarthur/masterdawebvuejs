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

<script src="@/js/Register.js"></script>

