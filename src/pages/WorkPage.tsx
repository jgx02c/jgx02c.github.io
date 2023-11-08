import { HomeWork } from "../components/home-work/home-work";
import styles from "./WorkPage.module.scss"

function WorkPage () {
    return(
        <div className={styles.root}>
            <HomeWork />
        </div>
    )
}

export default WorkPage;