import Todolist from "../components/todolist/Todolist";

function Pessoal() {
  return (
    <div>
      <h1>Tarefas Pessoais</h1>
      <ul>
        <li>
          <Todolist collectionId={1} />{" "}
          {/* Passando a collectionId para Pessoal */}
        </li>
      </ul>
    </div>
  );
}

export default Pessoal;
