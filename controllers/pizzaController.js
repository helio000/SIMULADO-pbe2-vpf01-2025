const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async create(req, res) {
    const { nome, preco } = req.body;
    const pizza = await prisma.pizza.create({ data: { nome, preco } });
    res.json(pizza);
  },

  async findAll(req, res) {
    const pizzas = await prisma.pizza.findMany();
    res.json(pizzas);
  },

  async findOne(req, res) {
    const { id } = req.params;
    const pizza = await prisma.pizza.findUnique({ where: { id: Number(id) } });
    res.json(pizza);
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const pizza = await prisma.pizza.update({
      where: { id: Number(id) },
      data: { nome, preco }
    });
    res.json(pizza);
  },

  async delete(req, res) {
    const { id } = req.params;
    await prisma.pizza.delete({ where: { id: Number(id) } });
    res.json({ message: 'Pizza deletada com sucesso' });
  }
};
