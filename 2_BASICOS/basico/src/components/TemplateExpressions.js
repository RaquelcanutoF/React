const TemplateExpressions = () => {
    const name = "Raquel";
    const data = {
        age: 31,
        job: "Estudante",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpressions;