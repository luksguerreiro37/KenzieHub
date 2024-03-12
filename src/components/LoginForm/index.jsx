import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { UserContext } from "../../providers/UserContext"
import { api } from "../../services/api"
import Input from "../Input"
import InputPassword from "../InputPassword"
import { loginScheme } from "./loginScheme"
import styles from "./style.module.scss"

const LoginForm = () => {
    const {navigate, setUser, loginRequest} = useContext(UserContext)
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:zodResolver(loginScheme)
    })

    const submit = (formData) => {
        loginRequest(formData)
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <p className={styles.login}>Login</p>
                <Input label="Email" type="text" placeholder="Digite seu email" error={errors.email} register={register("email")}/>
                <InputPassword label="Senha" register={register("password")} error={errors.password}  placeholder="Digite sua senha"/>
                <button className={styles.loginButton}>Entrar</button>
                <div className={styles.redirect}>
                    <p>Ainda não possui conta?</p>
                    <Link to="/register" className={styles.loginLink}>
                        <button>Cadastre-se</button>
                    </Link>
                </div>
            </form>
    )
}
export default LoginForm