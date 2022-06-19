import { TodoProvider } from "./fetures/todo-contex";
import TodoList from './components/TodoList';
import { TabProvider } from "./fetures/tab-contex";

function App() {
  return (
    <TodoProvider>
      <TabProvider>
        <TodoList />
      </TabProvider>
    </TodoProvider>
  );
}

export default App;
