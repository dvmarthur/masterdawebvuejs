import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductList from '../components/ProductList.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    
    {
      path: '/products',
      name: 'ProductList',
      component: () => import('../views/ProductListView.vue'),
      meta: { requiresAuth: true }, // Indica que essa rota requer autenticação


    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    
  ]
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token'); // Verifica se o token existe no Local Storage

  if (requiresAuth && !isAuthenticated) {
    next('/login'); // Redireciona para a página de login
  } else {
    next(); // Continua a navegação normalmente
  }
});


export default router;
