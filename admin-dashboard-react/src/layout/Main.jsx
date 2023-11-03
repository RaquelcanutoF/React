import styles from "./Main.module.css";

import Topbar from "../components/Topbar";
import CardBox from "../components/CardBox";

let  Main = () => {

    return (
        <div className={styles.main}>
            
            <Topbar />

            <CardBox />
        </div>
    );

};

export default Main;
    