import styles from "./Status.module.css";
import Status from "./Status";
import RecentOrders from "./RecentOrders";
import CardHeader from "./CardHeader";
import Btn from "./Btn"

function Details({details}) {
   return (
      <div className={styles['details']}>
          <RecentOrders />
          <div>
            <CardHeader />
            <h2>Recent Orders</h2>
            <Btn />
          </div>
          <Status />
      </div>       
    );
};

export default Details;