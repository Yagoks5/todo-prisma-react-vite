import {
  Container,
  Input,
  Button,
  TaskList,
  TaskItem,
  TaskText,
  InputWrapper,
} from "./TodolistStyled";
import { useTodoList } from "../../hooks/useTodoList";
import { FaRegTrashAlt } from "react-icons/fa"; // Importando o ícone da lixeira

// eslint-disable-next-line react/prop-types
const TodoList = ({ collectionId }) => {
  const {
    tasks,
    completedTasks,
    title,
    setTitle,
    handleCreateTask,
    handleDeleteTask,
    handleCompleteTask,
  } = useTodoList(collectionId);

  return (
    <Container>
      <InputWrapper>
        <Button onClick={handleCreateTask}>+</Button>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nova tarefa"
        />
      </InputWrapper>

      <h2>Tarefas Ativas</h2>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <Button onClick={() => handleCompleteTask(task.id)}>
              Concluir
            </Button>
            <TaskText>{task.title}</TaskText>
          </TaskItem>
        ))}
      </TaskList>

      <h2>Tarefas Concluídas</h2>
      <TaskList>
        {completedTasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskText completed>{task.title}</TaskText>
            <Button onClick={() => handleDeleteTask(task.id)}>
              <FaRegTrashAlt />
            </Button>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoList;
