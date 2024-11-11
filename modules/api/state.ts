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
        const existingTodo = _.find(get().todos, { id });
        if (existingTodo) {
          return existingTodo;
        }
        return null
      },
      createTodo: (newData: Todo) => {
        const data = get().todos
        set({
          todos: [
            ...data,
            ...[newData]
          ]
        });
        return newData;
      },
      updateTodo: (newData: Todo) => {
        const foundTodoIndex = _.findIndex(get().todos, { id: newData.id });
        if (foundTodoIndex > -1) {
          const data = get().todos
          data[foundTodoIndex] = newData;
          set({
            todos: data,
          });
          return newData;
        }
        return null;
      },
      deleteTodo: (id: number) => {
        const data = get().todos
        const foundTodoIndex = _.findIndex(data, { id });
        if (foundTodoIndex > -1) {
          delete data[foundTodoIndex];
          set({
            todos: data
          });
          return true
        }
        return false
      },
      findTodo: (searchStr: string) => {
        const todos = get().todos
        if (_.isEmpty(searchStr) || searchStr == null) {
          return todos;
        }

        return _.filter(todos, (todo: Todo) => {
          const content = todo != null ? todo.content : '';
          if (_.isEmpty(content)) {
            return false;
          }
          return _.includes(_.toLower(content), _.toLower(searchStr))
        });
      }
    }),
    {
      name: 'todo-store',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
)
