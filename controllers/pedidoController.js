const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async create(req, res) {
    const { clienteId, pizzas } = req.body;

    const pedido = await prisma.pedido.create({
      data: {
        clienteId,
        pizzas: {
          create: pizzas.map(pizzaId => ({ pizzaId }))
        }
      },
      include: {
        pizzas: true
      }
    });

    res.json(pedido);
  },

  async findAll(req, res) {
    const pedidos = await prisma.pedido.findMany({
      include: {
        cliente: true,
        pizzas: {
          include: {
            pizza: true
          }
        }
      }
    });
    res.json(pedidos);
  },

  async findOne(req, res) {
    const { id } = req.params;

    const pedido = await prisma.pedido.findUnique({
      where: { id: Number(id) },
      include: {
        cliente: true,
        pizzas: {
          include: {
            pizza: true
          }
        }
      }
    });

    res.json(pedido);
  }
};
