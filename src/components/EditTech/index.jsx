import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechContext"
import { zodResolver } from "@hookform/resolvers/zod"
import styles from "./styles.module.scss"
import Input from "../Input"
import { editScheme } from "./editScheme"
import CreateSelect from "../CreateSelect"

export const EditTech = () => {
    const { editRequest, setOpenEdit, editingTech } = useContext(TechContext)
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:zodResolver(editScheme)
    })

   
    const submit = (formData) => {
        editRequest(formData, editingTech.id)
    }

    return(
        <section className={styles.section}>
            <div className={styles.modal}>
                <header>
                    <p>Tecnologia Detalhes</p>
                    <span onClick={()=>setOpenEdit(false)}>X</span>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" disabled={true} value={editingTech.title} type="text" placeholder={editingTech.title}/>
                    <CreateSelect label={"Selecionar o status"} register={register("status")}/>
                    <button type="submit">Salvar alterações</button>
                </form>
            </div>
        </section>
    )
}