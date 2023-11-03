import styles from "./CardBox.module.css";

import Card from "./Card";

let CardBox = () => {


    let cards = [
        {
            name: "Card 1",
            numbers: 1000,
            icon: "eye"
        },
        {
            name: "Card 2",
            numbers: 1000,
            icon: "eye"
        },
        {
            name: "Card 3",
            numbers: 1000,
            icon: "eye"
        },
        {
            name: "Card 4",
            numbers: 1000,
            icon: "eye"
        }

    ]


    return (
        <div className={styles.cardbox}>
         
            {
                cards.map((card, i) => <Card key={i} name={card.name} numbers={card.numbers} icon={card.icon}  />)   
            }
        </div>  
    );

};

export default CardBox;
