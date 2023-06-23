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
