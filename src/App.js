import { TodoProvider } from "./fetures/todo-contex";
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
