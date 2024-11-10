export type TodoStatus =
  | 'pending'
  | 'inprogress'
  | 'completed';

export type Todo = {
  id: number;
  status: TodoStatus;
  content: string;
}
