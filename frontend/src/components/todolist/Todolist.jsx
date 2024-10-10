// src/components/TodoList/TodoList.jsx
import {
  Container,
  Title,
  Input,
  Button,
  TaskList,
  TaskItem,
  TaskText,
} from "./TodolistStyled";
import { useTodoList } from "../../hooks/useTodoList";

// eslint-disable-next-line react/prop-types
const TodoList = ({ collectionId }) => {
  const { tasks, title, setTitle, handleCreateTask, handleDeleteTask } =
    useTodoList(collectionId);

  return (
    <Container>
      <Title>To-Do List</Title>
      <div>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nova tarefa"
        />
        <Button onClick={handleCreateTask}>Adicionar</Button>
      </div>

      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskText completed={task.completed}>{task.title}</TaskText>
            <Button onClick={() => handleDeleteTask(task.id)}>Deletar</Button>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoList;
