import Todolist from "../components/todolist/Todolist";

function Pessoal() {
  return (
    <div>
      <h1>Tarefas Pessoais</h1>
      <Todolist collectionId={1} /> {/* Passando a collectionId para Pessoal */}
    </div>
  );
}

export default Pessoal;
