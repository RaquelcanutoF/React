import React from "react";

const ConditionalRender = () => {
   const x = 5;

   const name= "Luah"

  return(
    <div>
    {/* 7 - render condicional */}
    <h3>Isso será exibido?</h3>
    {x > 2 && <p>Se x for true sim!</p>}
    {/* 8 - else */}
    <h3>Render ternário</h3>
    {name === "Luah" ?(
      <div>
        <p>Olá Luah!</p>
      </div>
    ) : (
      <div>
        <p>Nome não encontrado!</p>
      </div>
    )}
  </div>
 );
};

export default ConditionalRender;