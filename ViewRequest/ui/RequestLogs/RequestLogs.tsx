import { FC } from "react";
import styles from "./RequestLogs.module.scss";
import { getOneRequestApi } from "@/shared/api";

export const RequestLogs: FC = () => {
    const fetchRequest = getOneRequestApi();
    return (
        <div className={styles.Logs}>
            {fetchRequest.oneRequest.logs.map((card, i) => (
                <div
                    id={card.task_number}
                    key={i}
                    className={styles.Log}
                >
                    <div className={styles.LogHeader}>
                        <img
                            src=""
                            alt=""
                        />
                        <p className={styles.Name}>{card.user}</p>
                        <p className={styles.Time}>Внес изменения {card.formatted_created_at}</p>
                    </div>
                    <div className={styles.LogMain}>
                        <div className={styles.TypeOf}>
                            <p>{card.field?.slice(0, 10)}</p>
                        </div>
                        <div className={styles.Prev}>
                            Изначальное: <p>{card.initially?.slice(0, 10)}...</p>
                        </div>
                        <div className={styles.Prev}>
                            Новое: <p>{card.new?.slice(0, 10)}...</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
