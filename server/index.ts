import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Todos } from '@prisma/client/index';
import { Prisma } from '@prisma/client';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  readUserTodos
} from './modelUtils/Todos.model';

const app = express();
app.use(morgan('combined'));
app.use(cors())
app.use(json());

app.get('/health', (req, res) => {
  res.send('OK');
});

interface listQueryParams {
  userId: string;
}
app.get('/list', async (req: Request<unknown, unknown, unknown, listQueryParams>, res: Response) => {
  console.log('on route /list')
  const id = parseInt(req.query.userId);
  // let userIdNum = (typeof userId === 'string') ? parseInt(userId) : userId
  const getUserTodos = await readUserTodos(id);
  console.log('getUserTodos value: ', getUserTodos);
  if (getUserTodos.status === 'success') {
    res.status(200);
    res.send({
      userTodos: getUserTodos.payload
    })
  }
})

app.post('/todos/create', async (req: Request, res: Response) => {
  console.log('data received: ', req.body);
  const { firstReason, secondReason, thirdReason, firstSteps, secondSteps, thirdSteps } = req.body.roadblocks;
  const { title, description, startDate, endDate, userId } = req.body;
  const todosData = {
    title,
    description,
    startDate,
    endDate,
    userId,
    firstReason,
    firstSteps,
    secondReason,
    secondSteps,
    thirdReason,
    thirdSteps,
  }
  const createStatus = await createTodo(todosData);
  if (createStatus.status === 'success') {
    console.log('in success block for handler of /todos/create');
    res.send('created successfully');
  }
  if (createStatus.status === 'error') {
    console.log('in error block of handler for /todos/create');
    res.status(500);
    res.send('Server error. Could not update the database. Please try again later');
  }
  res.send('hello from /todos/create');
});

app.listen(3001, () => console.log('server started to listen on port 3001'));