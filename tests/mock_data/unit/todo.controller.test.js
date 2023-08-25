const TodoController = require("../../../controller/todo.controller");
const TodoModel = require("../../../model/todo.model");
const httpMocks = require("node-mocks-http");

TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  it("should call TodoModel.create", () => {
    let req, res, next;
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalled();
  });
});