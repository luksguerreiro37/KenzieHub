import styles from "./style.module.scss"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

const InputPassword = ({ error,label, register, disabled, placeholder }) => {
    const { isHidden, setIsHidden} = useContext(UserContext)
    return(
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input type={isHidden? "password":"text"} 
            {...register}
            placeholder={placeholder}
            disabled = {disabled}
            />
            {error? <p>{error.message}</p>:null}
            <i type="button" onClick={() => setIsHidden(!isHidden)}>
                {isHidden? <MdVisibility />:<MdVisibilityOff />}
            </i>
        </div>
    )
}

export default InputPassword