import prisma from './client';
import { Todos } from '@prisma/client/index';
import { Prisma } from '@prisma/client';

// type todoCreateType = Prisma.TodosGetPayload<>

const createTodo = async (todoData: Prisma.TodosUncheckedCreateInput) => {
  try {
    const newTodo = await prisma.todos.create({
      data: todoData
    });
    console.log('todo created successfully');
    return ({
      status: 'sucgcess',
      error: null,
    })
  }
  catch(err) {
    return ({
      status: 'error',
      error: err,
    })
  }
};

const deleteTodo = async(todoId: number) => {
  try{
    await prisma.todos.delete({
      where: {
        id: todoId
      }
    });
    return ({
      status: 'success',
      error: null
    })
  }
  catch(err) {
    return ({
      status: 'error',
      error: err
    })
  }
};

const updateTodo = async (todoData: Todos) => {
  try{
    const updatedTodo = await prisma.todos.update({
      where: {
        id: todoData.id
      },
      data: todoData
    });
    return ({
      status: 'success',
      error: null
    })
  }
  catch(err) {
    return ({
      status: 'error',
      error: err
    });
  }
};

const readUserTodos = async (userId: number) => {
  console.log('inside readUserTodos model, received userId: ', userId);
  try {
    const todosData = await prisma.todos.findMany({
      where: {
        userId: userId
      }
    })
    return ({
      status: 'success',
      error: null,
      payload: todosData
    })
  }
  catch(err) {
    return ({
      status: 'error',
      error: err
    })
  }
};

export {
  createTodo,
  deleteTodo,
  updateTodo,
  readUserTodos
}
