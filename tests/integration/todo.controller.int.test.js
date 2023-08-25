const request = require("supertest");
const app = require("../../app");
const newTodo = require("../mock_data/new_todo.json");

const endpointURL = "/todos/";

describe(endpointURL, () => {
  it("POST" + endpointURL, async () => {
    const response = await request(app).post(endpointURL).send(newTodo);
    expect(response.statusCode).toBe(201);
    expect(response.title).toBe(newTodo.title);
    expect(response.body.done).toBe(newTodo.done);
  });
});
