import * as express from 'express';
import { todoValidationRules, validate } from './validators/todo-validator';
import * as todoController from '../controllers/todo-controller';

const todoRouter = express.Router();

todoRouter.post('/', todoValidationRules(), validate, todoController.createTodo);
todoRouter.get('/', todoController.getTodos);

export default todoRouter;