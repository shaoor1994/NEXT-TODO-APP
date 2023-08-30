import Todo from "./todo";

const getTodos = async () => {
    let todos = await fetch("http://localhost:3001/api/todo/list");
    return todos.json();
  };

export default async function TODOLIst(){
    const { todos } = await getTodos();
  //  console.log(todos);
return(
<div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
              {/* {t.name} */}
            </li>
          );
        })}
      </ul>
    </div>
);
}