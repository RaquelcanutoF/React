import styles from "./Sidebar.module.css";

import MenuItem from "../components/MenuItem";

let Sidebar = () => {

    let links = [
        {
            title: "Brand name",
            icon: "LuApple"
        },
        {
            title: "Brand name",
            icon: "LuApple"
        },
        {
            title: "Brand name",
            icon: "LuApple"
        },
        {
            title: "Brand name",
            icon: "LuApple"
        },
        {
            title: "Brand name",
            icon: "LuApple"
        },
        {
            title: "Brand name",
            icon: "LuApple"
        },
        {
            title: "Brand name",
            icon: "LuApple"
        },
        {
            title: "Brand name",
            icon: "LuApple"
        }
    ]


    return (
        <div className={styles.navigation}>
            <ul>
                {
                    links.map((link, i) => <MenuItem key={i} title={link.title} icon={link.icon} /> )
                }    
            </ul>      
        </div>
    );
};

export default Sidebar;