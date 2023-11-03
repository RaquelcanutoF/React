import styles from "./Status.module.css";

function Status({Name, Price, Payment, Status}) {
    return (
      <>
            <table>
                <thead>
                    <tr>
                        <td>Name {Name}</td>
                        <td>Price {Price}</td>
                        <td>Payment {Payment}</td>
                        <td>Status {Status}</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Star Refrigerator {Name}</td>
                        <td>$1200 {Price}</td>
                        <td>Paid {Payment}</td>
                        <td><span className={styles["status delivered"]}>Delivered {Status}</span></td> 
                        </tr>

                    <tr>
                        <td>Dell Laptop {Name}</td>
                        <td>$110 {Price}</td>
                        <td>Due {Payment}</td>
                        <td><span className={styles["status pending"]}>Pending {Status}</span></td>
                        </tr>

                    <tr>
                        <td>Apple Watch {Name}</td>
                        <td>$1200 {Price}</td>
                        <td>Paid {Payment}</td>
                        <td><span className={styles["status return"]}>Return {Status}</span></td>
                    </tr>

                    <tr>
                        <td>Addidas Shoes {Name}</td>
                        <td>$620 {Price}</td>
                        <td>Due {Payment}</td>
                        <td><span className={styles["status inProgress"]}>In Progress {Status}</span></td>
                    </tr>

                    <tr>
                        <td>Star Refrigerator {Name}</td>
                        <td>$1200 {Price}</td>
                        <td>Paid {Payment}</td>
                        <td><span className={styles["status delivered"]}>Delivered {Status}</span></td>
                        </tr>

                        <tr>
                            <td>Dell Laptop {Name}</td>
                            <td>$110 {Price}</td>
                            <td>Due {Payment}</td>
                            <td><span className={styles["status pending"]}>Pending {Status}</span></td>
                        </tr>

                        <tr>
                            <td>Apple Watch {Name}</td>
                            <td>$1200 {Price}</td>
                            <td>Paid {Payment}</td>
                            <td><span className={styles["status return"]}>Return {Status}</span></td>
                        </tr>

                        <tr>
                            <td>Addidas Shoes {Name}</td>
                            <td>$620 {Price}</td>
                            <td>Due {Payment}</td>
                            <td><span className={styles["status inProgress"]}>In Progress {Status}</span></td>
                        </tr>
                    </tbody>
            </table>
        </>

    );
};

export default Status;