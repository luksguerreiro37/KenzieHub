import style from "./style.module.scss"

const CreateSelect = ({ register, label, disabled }) => {
    
    return(
        <>
            <div className={style.inputBox}>
                <label>{label}</label>
                <select { ...register } disabled={disabled}>
                    <option value="Iniciante">
                        Iniciante
                    </option>
                    <option value="Intermediário">
                        Intermediário
                    </option>
                    <option value="Avançado">
                        Avançado
                    </option>
                </select>
            </div>
        </>
    )
}
export default CreateSelect