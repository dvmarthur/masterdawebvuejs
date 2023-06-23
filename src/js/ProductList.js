import axios from 'axios';
import Product from '@/components/Product.vue';
import Swal from 'sweetalert2';

// Configuração do token de autenticação
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  components: {
    Product
  },
  data() {
    return {
      products: [],
      cartItems: [],
      pedidoFechado: false,
      pedidos: {}
    };
  },
  mounted() {
    this.fetchProducts();
    this.fetchPedidos();
  },
  methods: {
    fetchProducts() {
      axios
        .get('http://127.0.0.1:8000/api/produtos')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchPedidos() {
      axios
        .get('http://localhost:8000/api/pedidos')
        .then(response => {
          const pedidos = response.data;
          this.groupPedidosByCodigo(pedidos);
        })
        .catch(error => {
          console.error(error);
        });
    },
    groupPedidosByCodigo(pedidos) {
      pedidos.forEach(pedido => {
        if (!this.pedidos[pedido.codigo_pedido]) {
          this.pedidos[pedido.codigo_pedido] = [];
        }
        this.pedidos[pedido.codigo_pedido].push(pedido);
      });
    },
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = {
          id: product.id,
          nome: product.nome,
          quantity: 1
        };
        this.cartItems.push(newItem);
      }
    },
    removeFromCart(item) {
      const index = this.cartItems.indexOf(item);
      if (index > -1) {
        this.cartItems.splice(index, 1);
      }
    },
    fecharPedido() {
      const pedido = {
        itens: this.cartItems.map(item => {
          return {
            produto_id: item.id,
            quantidade: item.quantity
          };
        })
      };

      axios
        .post('http://127.0.0.1:8000/api/pedidos', pedido)
        .then(response => {
          console.log(response.data);
          this.cartItems = [];
          this.pedidoFechado = true;
          Swal.fire('Pedido fechado', '', 'success').then(() => {
            window.location.href = '/products';
          });
        })
        .catch(error => {
          console.error(error);
          Swal.fire('Erro ao fechar pedido!', '', 'error');
        });
    }
  }
};
