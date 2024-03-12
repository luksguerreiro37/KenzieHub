import { useContext } from "react"
import deleteIcon from "../../../assets/img/delete.svg"
import editIcon from "../../../assets/img/edit.svg"
import { TechContext } from "../../../providers/TechContext"
import styles from "./style.module.scss"

export const TechCard = ({ tech }) => {
    const { deleteRequest, setOpenEdit, setEditingTech } = useContext(TechContext)
    const id = tech.id

    const showEditModal = () => {
        setOpenEdit(true)
        setEditingTech(tech)
    }

    return(
        <li className={styles.li}>
                <p>{tech.title}</p>
                <div className={styles.handle}>
                    <span>{tech.status}</span>
                    <div className={styles.icons}>
                        <img src={deleteIcon} onClick={() => deleteRequest(id)}/>
                        <img src={editIcon} onClick={()=> showEditModal()}/>
                    </div>
                </div>
        </li>
    )
}