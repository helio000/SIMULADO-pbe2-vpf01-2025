const express = require('express');
const app = express();
app.use(express.json());

const pizzaRoutes = require('./routes/pizzaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

app.use('/pizzas', pizzaRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
