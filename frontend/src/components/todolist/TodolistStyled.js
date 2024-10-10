import styled from "styled-components";
// Estilizando o container principal
export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Estilizando o título
export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

// Estilizando o campo de entrada
export const Input = styled.input`
  width: calc(100% - 120px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Estilizando o botão
export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Estilizando a lista de tarefas
export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

// Estilizando os itens da tarefa
export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

// Estilizando o texto da tarefa
export const TaskText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#aaa" : "#333")};
`;
