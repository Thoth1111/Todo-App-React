import TodoItem from '@/components/TodoItem';
const TodosList = ( { todosProps }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
        <TodoItem />
        ))}
      </ul>
    );
  };
  export default TodosList;
  