import styles from "./MenuItem.module.css";

import  {LuApple } from "react-icons/lu";



let MenuItem = ({title, icon}) => {


    return (
        <li>
            <a >
                <span className={styles.icon}>
                    {
                        icon == "LuApple" && <LuApple />
                    }
                </span>
                <span className={styles.title}>
                    {title}
                </span>
            </a>
        </li>
    );

};



export default MenuItem;