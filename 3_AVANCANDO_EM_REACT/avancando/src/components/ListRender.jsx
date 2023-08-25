import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Raquel", "Lago", "Ludovico", "Rayca"]);

  const [users, setUsers] = useState([
    {id: 1, name: "Raquel", age: 31},
    {id: 2, name: "Luah", age: 18},
    {id: 3, name: "Helen", age: 30},
    {id: 3, name: "Hiara", age: 30},
    {id: 3, name: "Hele", age: 30},
    {id: 3, name: "Hiago", age: 30},
    {id: 3, name: "Hitalo", age: 30},
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() *4)

    setUsers((prevUsers) => 
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return ( 
  <div>
    {/* 4 - render sem key */}
    <ul>
      {list.map((item, i) => { 
        <li key={i}>{item}</li>;
      })}    
    </ul>
    {/* 5 - render com key */}
    <ul>
     {users.map((user)=> (
       <li key={user.id}>
        {user.name} - {user.age}  anos
       </li>
      ))}
    </ul>
    {/* 6 - previous state */}
    <button onClick={deleteRandom}>Delete random user</button>
  </div>  
 );
};

export default ListRender;