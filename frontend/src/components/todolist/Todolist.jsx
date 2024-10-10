import { FaRegTrashAlt } from "react-icons/fa";

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

// eslint-disable-next-line react/prop-types
const TodoList = ({ collectionId }) => {
  const { tasks, title, setTitle, handleCreateTask, handleDeleteTask } =
    useTodoList(collectionId);

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

      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskText completed={task.completed}>{task.title}</TaskText>
            <Button onClick={() => handleDeleteTask(task.id)} transparent>
              <FaRegTrashAlt />
            </Button>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoList;
