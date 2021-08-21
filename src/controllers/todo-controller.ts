import { Response, Request } from "express"
import * as todoService from '../services/todo-service';
import { message } from "../consants/messages";
import { httpStatusCode } from "../consants/http-status";


export async function createTodo(req: Request, res: Response): Promise<any> {
  try {
    const allTodos = await todoService.createTodo(req.body);
    res.status(httpStatusCode.CREATED).json({ message: message.TODO_ADDED, todos: allTodos });
  } catch(err) {
    console.log(err);
    
    res.status(err.httpStatus).json(err.message);
  }
}

export async function getTodos(req: Request, res: Response): Promise<any> {
  try {
    const todos = await todoService.getTodos();
    res.status(httpStatusCode.OK).json({ todos });
  } catch (err) {
    res.status(err.httpStatus).json(err.message);
  }
}