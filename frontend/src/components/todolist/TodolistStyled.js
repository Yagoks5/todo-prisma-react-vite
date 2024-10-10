import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 50 auto;
  padding: 20px;
  background-color: #191919;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 10px;
  font-size: 16px;
  background-color: #333;
  color: #ffffff;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #ff0084;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const TaskText = styled.span`
  flex-grow: 1;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
