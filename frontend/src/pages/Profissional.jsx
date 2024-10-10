import Todolist from "../components/todolist/Todolist";

function Profissional() {
  return (
    <div>
      <h1>Tarefas Profissionais</h1>
      <Todolist collectionId={2} />{" "}
      {/* Passando a collectionId para Profissional */}
    </div>
  );
}

export default Profissional;
