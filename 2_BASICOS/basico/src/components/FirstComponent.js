// arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // essa função faz isso

    /*
        multi line
    */

    return (
        <div>
            {/*coment*/}
            <h1>Meu primeiro componente</h1>
            <p ClassName="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;

