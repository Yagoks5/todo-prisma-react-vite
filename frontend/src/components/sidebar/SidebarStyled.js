import styled from "styled-components";
import { Link } from "react-router-dom";

// Estilizando o container da Sidebar
export const SidebarContainer = styled.nav`
  height: 100vh; // Ocupa toda a altura da tela
  width: 250px; // Largura da sidebar
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed; // Fixa a sidebar na tela
  padding-top: 20px; // Espaçamento no topo
`;

// Estilizando a lista de navegação
export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

// Estilizando os itens da lista
export const NavItem = styled.li`
  padding: 15px 20px;
`;

// Estilizando os links de navegação
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    color: #ddd;
  }
`;
