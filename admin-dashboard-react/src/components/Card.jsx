import styles from "./Card.module.css"

import {LuEye} from "react-icons/lu";


let Card = ({numbers, name, icon}) => {

    return (
        <div className={styles.card}>
            <p>Card</p>
            <div>
                <div className={styles.numbers}>{numbers}</div>
                <div className={styles.cardname}>{name}</div>
            </div>
            
            <div className={styles.iconbox}>

                {
                    icon == "eye" && <LuEye />
                        
                }
                
            </div>
        </div>
               
     );

 };
 
 export default Card;
