import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/UserContext"
import styles from "./styles.module.scss"
import logo from "../../assets/img/Logo.svg"
import add from "../../assets/img/add.svg"
import { CreateTech } from "../../components/CreateTech"
import { TechContext } from "../../providers/TechContext"
import { TechList } from "../../components/TechList"
import { EditTech } from "../../components/EditTech"

const HomePage = () => {
    const { navigate, logout, user, techs } = useContext(UserContext)
    const { open, setOpen, openEdit } = useContext(TechContext)
    useEffect(()=>{
        if (user === null) {
            navigate("/login")
        }
    }, [])

    

    

return(
    <>
    <header className={styles.header}>
        <img src={logo} />
        <button onClick={() => logout()}>Sair</button>
        
    </header>
    <section className={styles.section}>
        <h2>Olá, {user?user.name:null}</h2>
        <p>{user?user.course_module:null}</p>
    </section>
    <main className={styles.main}>
        <div className={styles.mainHeader}>
            <p>Tecnologias</p>
            <button onClick={() => setOpen(!open)}>
            <img src={add} alt="" />
            </button>
        </div>
        <TechList />
    </main>
    {open ? <CreateTech/>:null}
    {openEdit ? <EditTech/>:null}
    </>
)
}

export default HomePage