const request = require("supertest");
const express = require("express");
const { router } = require("../routes");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(router);

beforeAll(async () => {
  await prisma.task.deleteMany(); // Limpa tarefas antes dos testes
});

afterAll(async () => {
  await prisma.$disconnect(); // Desconecta o Prisma após os testes
});

describe("Todo API", () => {
  it("deve criar uma nova tarefa", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "Nova tarefa" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Nova tarefa");
    expect(response.body.completed).toBe(false);
  });

  it("deve mostrar todas as tarefas", async () => {
    await request(app).post("/tasks").send({ title: "Outra tarefa" });

    const response = await request(app).get("/tasks");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2); // Verifica se duas tarefas foram criadas
  });

  it("deve atualizar uma tarefa", async () => {
    const task = await prisma.task.create({
      data: {
        title: "Tarefa a ser atualizada",
        completed: false,
      },
    });

    const response = await request(app)
      .put(`/tasks/${task.id}`)
      .send({ completed: true });

    expect(response.status).toBe(200);
    expect(response.body.completed).toBe(true);
  });

  it("deve deletar uma tarefa", async () => {
    const task = await prisma.task.create({
      data: {
        title: "Tarefa a ser deletada",
        completed: false,
      },
    });

    const response = await request(app).delete(`/task/${task.id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Tarefa deletada");
  });
});
