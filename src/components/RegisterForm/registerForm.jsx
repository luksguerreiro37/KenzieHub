import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext"
import Input from "../Input"
import InputPassword from "../InputPassword"
import Select from "../Select"
import { registerScheme } from "./registerScheme"
import styles from "./style.module.scss"

const RegisterForm = () => {
    const { loading, userRegister } = useContext(UserContext)
    
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:zodResolver(registerScheme)
    })

   
    const submit = (formData) => {
        userRegister(formData)
    }
    return(
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa</p>
                <Input label="Nome" type="text" placeholder="Digite seu nome" error={errors.name} register={register("name")} disabled={loading}/>
                <Input label="Email" type="text" placeholder="Digite seu email" error={errors.email} register={register("email")} disabled={loading}/>
                <InputPassword label="Senha" register={register("password")} error={errors.password} disabled={loading} placeholder="Digite sua senha"/>
                <InputPassword label="Confirmar senha" register={register("confirmPassword")} error={errors.confirmPassword} placeholder="Confirme sua senha" disabled={loading}/>
                <Input label="Bio" type="text" placeholder="Fale sobre você" error={errors.bio} register={register("bio")} disabled={loading}/>
                <Input label="Contato" type="number" placeholder="Opção de contato" error={errors.contact} register={register("contact")} disabled={loading}/>
                <Select label={"Selecionar Módulo"} register={register("course_module")} disabled={loading}/>
                <button>Cadastrar</button>
            </form>
    )
}

export default RegisterForm