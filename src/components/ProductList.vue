<template>
  <main>
    <div class="container mt-5">
      <div class="row justify-content-center logotema mt-5">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h2 class="title mt-5">Listagem de Produtos</h2>
              <h3>Escolha uma das opções abaixo:</h3>
              <div class="product-card">
                <div class="row flex-column">
                  <div class="col-md-12" v-for="product in products" :key="product.id">
                    <product :product="product" @add-to-cart="addToCart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4 " v-if="cartItems.length > 0">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Checkout</h2>
              <div class="card-text">
                <div class="checkout-item" v-for="item in cartItems" :key="item.id">
                  <p class="quantity">{{ item.quantity }} x</p>
                  <p class="product-nome">{{ item.nome }}</p>
                  <button class="btn btn-danger remove-btn rounded" @click="removeFromCart(item)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-4" v-if="!pedidoFechado">
            <button class="btn btn-primary btn-lg" @click="fecharPedido">
              <i class="bi bi-cart-fill"></i> Fechar Pedido
            </button>
          </div>
        </div>
      </div>
      <div class="table-responsive">
          <h2>Meus Pedidos</h2>
          <div v-for="(grupoPedidos, codigoPedido) in pedidos" :key="codigoPedido">
            <h3>Pedido: {{ codigoPedido }}</h3>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Produto ID</th>
                  <th>Quantidade</th>
                  <th>Criado em</th>
                  <th>Atualizado em</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="pedido in grupoPedidos" :key="pedido.id">
                  <td>{{ pedido.id }}</td>
                  <td>{{ pedido.produto_id }}</td>
                  <td>{{ pedido.quantidade }}</td>
                  <td>{{ pedido.created_at }}</td>
                  <td>{{ pedido.updated_at }}</td>
                </tr>
              </tbody>
        </table>
    </div>
</div>

    </div>
  </main>
</template>

<script src="@/js/ProductList.js"></script>

<style scoped>
@import '@/assets/css/productlist.css';
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';
</style>
