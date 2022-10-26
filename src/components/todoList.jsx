import TodoItem from "./todoItem"

export default function TodoList({ todos, onRemoveTodo, onUpdateTodoIsDone }) {
  return (
    <ul>
      {
        todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} onRemoveTodo={onRemoveTodo} onUpdateTodoIsDone={onUpdateTodoIsDone} />
        ))
      }
    </ul>
  )
}