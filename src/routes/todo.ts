import * as express from 'express';
import { todoValidationRules, validate } from './validators/todo-validator';
import * as todoController from '../controllers/todo-controller';

const todoRouter = express.Router();
console.log(todoValidationRules);

todoRouter.post('/', todoValidationRules(), validate, todoController.createTodo);
todoRouter.get('/', todoController.getTodos);

export default todoRouter;