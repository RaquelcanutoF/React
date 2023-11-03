import styles from "./Container.module.css";

// Layout
import Sidebar from "./Sidebar";
import Main from "./Main"

function Container() {
    
    return (    
        <div className={styles.container}>

            <Sidebar />
            <Main />

        </div>
    );

};

export default Container;