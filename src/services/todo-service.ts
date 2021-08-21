import { iTodo } from "../db/types/todo"
import mTodo from "../db/models/todo"
import { httpStatusCode } from "../consants/http-status";
import { message } from "../consants/messages";

export async function createTodo(data: any): Promise<iTodo> {
  try {
    const body = data as Pick<iTodo, "name" | "description" | "date">

    const todo: iTodo = new mTodo({
      name: body.name,
      description: body.description,
      date: body.date,
    });

    const todos = await mTodo.find({name: todo.name});
    if(todos.length) {
      return Promise.reject({ httpStatus: httpStatusCode.BAD_REQUEST, message: message.TODO_EXISTS });
    }
    const newTodo: iTodo = await todo.save();
    return newTodo;
  } catch (error) {
    throw { httpStatus: httpStatusCode.SERVICE_UNAVAILABLE, message: message.INTERNAL_ERROR};
  }
}

export async function getTodos(): Promise<iTodo[]> {
  try {
    const todos: iTodo[] = await mTodo.find()
    return todos;
  } catch (error) {
    throw { httpStatus: httpStatusCode.SERVICE_UNAVAILABLE, message: message.INTERNAL_ERROR};
  }
}
