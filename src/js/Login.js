import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      axios
        .post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);

          Swal.fire('Logado com sucesso', '', 'success').then(() => {
            window.location.href = '/products';
          });
        })
        .catch(error => {
          Swal.fire('Error ao logar', '', 'error').then(() => {
            window.location.href = '/login';
          });
          // Trate erros de login
        });
    },
  },
};
