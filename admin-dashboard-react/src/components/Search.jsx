import styles from "./Search.module.css";

import { LuSearch } from "react-icons/lu";

let  Search = ()  => {

    return (
        
        <div className={styles.search}>
            <label>
                <input type="text" placeholder="Search here" />
                <LuSearch />
            </label>
        </div>
            
    );

};

export default Search;