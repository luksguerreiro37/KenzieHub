import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechCard } from "./TechCard"

export const TechList = () => {
    const { techs } = useContext(UserContext)
    const teste = () => {
        console.log(techs)
    }
    return(
        <ul className={styles.list} onClick={()=> teste()}>
            {techs.map((tech)=> (
                <TechCard key={tech.id} tech={tech}/>
            ))}
        </ul>
    )
}