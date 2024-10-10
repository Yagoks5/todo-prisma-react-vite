import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import { useTasks } from "./hooks/useTasks";

// LIMPAR AS FUNÇÕES E LIMPAR UM POUCO!!!!!!!!!!!!!

function App() {
  const {
    activeTasks,
    completedTasks,
    newTask,
    setNewTask,
    error,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
  } = useTasks();

  return (
    <>
      <Header
        onAddTask={handleAddTask}
        newTask={newTask}
        setNewTask={setNewTask}
        error={error}
      />
      <Tasks
        tasks={activeTasks}
        onDelete={handleDeleteTask}
        onComplete={handleToggleTask}
        completedTasks={completedTasks}
      />
    </>
  );
}

export default App;
