import styles from "./Topbar.module.css";

import Toggle from "./Toggle";
import Search from "./Search";
import Profile from "./Profile";

let  Topbar = () => {

    return (
        <div className={styles['topbar']}>
            
            <Toggle />

            <Search />

            <Profile />

        </div>
    );
};

export default Topbar;