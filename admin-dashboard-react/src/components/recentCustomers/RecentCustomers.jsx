import styles from "./RecentCustomers.module.css";

function RecentCustomers(name, city, foto) {
  return (
        <div className={styles['recentCustomers']}>
            <div className={styles['cardHeader']}>
            <h2>Recents Customer</h2>
        </div>
            <table>
                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}>
                        <img src={foto} alt="savine" />

                    </div>
                </td>
                <td>
                    <h4>David <br /> <span>Italy</span></h4>
                </td>
                </tr>
                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}><img src={foto} alt="alagan" />
                    </div>
                </td>
                <td>
                    <h4>Amit <br /> <span>India</span></h4>
                </td>
                </tr>
                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}><img src={foto} alt="amelia" />
                    </div>
                </td>
                <td>
                    <h4>David <br /> <span>Italy</span></h4>
                </td>
                </tr>
                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}><img src={foto} alt="belle" />
                    </div>
                </td>
                <td>
                    <h4>Amit <br /> <span>India</span></h4>
                </td>
                </tr>
                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}><img src={foto} alt="brian" />
                    </div>
                </td>
                <td>
                    <h4>David <br /> <span>Italy</span></h4>
                </td>
                </tr>
                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}><img src={foto} alt="luise" />
                    </div>
                </td>
                <td>
                    <h4>Amit <br /> <span>India</span></h4>
                </td>
                </tr>
                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}><img src={foto} alt="rosa" />
                    </div>
                </td>
                <td>
                    <h4>David <br /> <span>Italy</span></h4>
                </td>
                </tr>

                <tr>
                <td width="60px">
                    <div className={styles['imgBx']}><img src={foto} alt="ruy" />
                    </div>
                </td>
                <td>
                    <h4>Amit <br /> <span>India</span></h4>
                </td>
                </tr>
            </table>
        </div>
    );
};

export default RecentCustomers;
 