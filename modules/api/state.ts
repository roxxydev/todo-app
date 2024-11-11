import _ from 'lodash';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

import { Todo } from './types';
import { mmkvStorage } from './storage';

interface AppState {
  todos: Todo[];
  getTodo: (id: number) => Todo | null;
  createTodo: (todo: Todo) => Todo;
  updateTodo: (todo: Todo) => Todo | null;
  deleteTodo: (id: number) => boolean;
  findTodo: (searchStr: string) => Todo[];
}

export const useAppState = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state for todos
      todos: [
        {
          id: 1,
          title: 'Test To Do 1',
          status: 'pending',
          content: 'Test To Do Content here.......',
        },
        {
          id: 2,
          title: 'Test To Do 2',
          status: 'pending',
          content: 'Test To Do Content 2 here.......',
        }
      ],
      getTodo: (id: number) => {
        const prevData = get().todos
        if (_.has(prevData, id)) {
          console.log('getTodo: ', prevData[id])
          return prevData[id]
        }
        return null
      },
      createTodo: (newData: Todo) => {
        const data = get().todos
        set({
          todos: {
            ...data,
            ...newData
          }
        });
        return newData;
      },
      updateTodo: (newData: Todo) => {
        const data = get().todos;
        const existingTodo = _.find(data, { id: newData.id });
        if (existingTodo) {
          data[existingTodo.id] = {
            id: existingTodo.id,
            status: newData.status,
            content: newData.content,
          }
          set({
            todos: {
              ...data,
              ...newData
            }
          });
          return data[existingTodo.id];
        }
        return null;
      },
      deleteTodo: (id: number) => {
        const data = get().todos
        const existingTodo = _.find(data, { id });
        if (existingTodo) {
          delete data[id];
          return true
        }
        return false
      },
      findTodo: (searchStr: string) => {
        const todos = get().todos
        return _.filter(todos, (todo: Todo) =>
          todo.content.toLowerCase().includes(searchStr.toLowerCase())
        );
      }
    }),
    {
      name: 'todo-store',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
)
