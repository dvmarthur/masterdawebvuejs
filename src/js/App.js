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