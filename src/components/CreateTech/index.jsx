import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechContext"
import { zodResolver } from "@hookform/resolvers/zod"
import styles from "./styles.module.scss"
import Input from "../Input"
import { createScheme } from "./createScheme"
import CreateSelect from "../CreateSelect"

export const CreateTech = () => {
    const { createRequest, setOpen } = useContext(TechContext)
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:zodResolver(createScheme)
    })

   
    const submit = (formData) => {
        createRequest(formData)
    }

    return(
        <section className={styles.section}>
            <div className={styles.modal}>
                <header>
                    <p>Cadastrar Tecnologia</p>
                    <span onClick={()=>setOpen(false)}>X</span>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" type="text" placeholder="Digite seu nome" error={errors.title} register={register("title")}/>
                    <CreateSelect label={"Selecionar o status"} register={register("status")}/>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </section>
    )
}