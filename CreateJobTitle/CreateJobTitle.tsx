import { CloseSquare } from "iconsax-react";
import styles from "./CreateJobTitle.module.scss";
import { CustomButton, CustomErrorCircle, CustomInput } from "@/shared/ui";
import { FC } from "react";
import { jobTitlesApi, successNotifApi } from "@/shared/api";
import { ICreateJobTitleModal } from "./types/types";

export const CreateJobTitle: FC<ICreateJobTitleModal> = (props) => {
    const { setModal } = props;
    const { oneJobTitle, postJobTitle, searchList, jobTitleNotExists, setSearchList, jobTitleInputChange } =
        jobTitlesApi();
    const { setState } = successNotifApi();
    const postTrim = () => {
        if (oneJobTitle.title !== "" && jobTitleNotExists !== false) {
            setState(`Должность “${oneJobTitle.title}” была  создана!`);
            postJobTitle(oneJobTitle);
            setSearchList([...searchList, oneJobTitle]);
            setModal(false);
        }
    };
    return (
        <div className={styles.CreateJobTitle}>
            <div className={styles.Header}>
                <div className={styles.Word}>Создать должность</div>
                <CloseSquare onClick={() => setModal(false)} />
            </div>
            <div className={styles.CreateJobTitleInput}>
                <CustomInput
                    name="title"
                    placeholder="Напишите..."
                    width={560}
                    value={oneJobTitle.title}
                    change={jobTitleInputChange}
                />
                <div className={styles.CustomErrorCircle}>
                    <CustomErrorCircle
                        exist={jobTitleNotExists}
                        text="Такая должность уже существует"
                    />
                </div>
            </div>
            <div className={styles.Buttons}>
                <CustomButton
                    variant="Without"
                    width={150}
                    text="Отменить"
                    onClick={() => setModal(false)}
                />
                <CustomButton
                    variant="Primary"
                    width={150}
                    text="Создать"
                    onClick={postTrim}
                />
            </div>
        </div>
    );
};
