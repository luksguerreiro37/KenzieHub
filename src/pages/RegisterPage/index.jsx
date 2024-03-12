import styles from "./styles.module.scss"
import { Link} from "react-router-dom"
import RegisterForm from "../../components/RegisterForm/registerForm"
import { UserContext } from "../../providers/UserContext"
import { useContext, useEffect } from "react"


const RegisterPage = () => {
    const {navigate} = useContext(UserContext)
    useEffect(()=>{
        const userToken = localStorage.getItem("@token")
        if (userToken) {
            navigate("/")
        }
    }, [])
    return(
        <>
        <section className={styles.section}>
            <div className={styles.header}>
            <img src="" alt="logo" />
                <Link to="/login" className={styles.loginLink}>
                    <button>Voltar</button>
                </Link>
            </div>
            <RegisterForm />
        </section>
        </>
    )
}
export default RegisterPage