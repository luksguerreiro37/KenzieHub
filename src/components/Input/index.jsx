import style from "./style.module.scss"

export const Input = ({ error, label, type, register, disabled, placeholder, value }) => {
    return(
        <div className={style.inputContainer}>
            <label>{label}</label>
            <input type={type} 
            {...register}
            disabled = {disabled}
            placeholder = {placeholder}
            value={value}
            />
            {error? <p>{error.message}</p>:null}
        </div>
    )
}

export default Input