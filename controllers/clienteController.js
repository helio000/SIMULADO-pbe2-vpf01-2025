const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async create(req, res) {
    const { nome, telefone, logradouro, numero, bairro } = req.body;
    const cliente = await prisma.cliente.create({
      data: { nome, telefone, logradouro, numero, bairro }
    });
    res.json(cliente);
  },

  async findAll(req, res) {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  },

  async findOne(req, res) {
    const { id } = req.params;
    const cliente = await prisma.cliente.findUnique({ where: { id: Number(id) } });
    res.json(cliente);
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, telefone, logradouro, numero, bairro } = req.body;
    const cliente = await prisma.cliente.update({
      where: { id: Number(id) },
      data: { nome, telefone, logradouro, numero, bairro }
    });
    res.json(cliente);
  },

  async delete(req, res) {
    const { id } = req.params;
    await prisma.cliente.delete({ where: { id: Number(id) } });
    res.json({ message: 'Cliente deletado com sucesso' });
  }
};
