export type TodoStatus =
  | 'pending'
  | 'inprogress'
  | 'completed';

export type Todo = {
  id: number;
  title: string;
  status: TodoStatus;
  content: string;
}
