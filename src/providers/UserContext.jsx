import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [isHidden, setIsHidden] = useState(true)
    const navigate = useNavigate()
    const[user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [techs, setTechs] = useState([])

    const pathname = window.location.pathname
    const userToken = localStorage.getItem("@token")
    const searchUser = async () => {
        if (userToken) {
            try {
                setLoading(true)
                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                })
                setUser(data)|
                navigate(pathname)
                setTechs(data.techs)
            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
    }
    useEffect(()=>{
        searchUser()
    }, [])
    const logout = () => {
        setUser(null)
        localStorage.removeItem("@token")
        navigate("/login")
    }

    const loginRequest = async (formData) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            toast.success("Login realizado com sucesso!")
            setUser(data.user)
            localStorage.setItem("@user:id", data.user.id)
            localStorage.setItem("@token", data.token)
            navigate("/")
        } catch (error) {
            toast.error("A conta não existe")
            if (error.response?.data === "Incorrect email / password combination") {
                toast.error("Email ou senha incorreta!")
            }
        }finally{
            setLoading(false)
        }
    }

    const userRegister = async (formData) => {
        try {
            setLoading(true)
            await api.post("/users", formData)
            toast.success("Conta criada com sucesso!")
            navigate("/login")
        } catch (error) {
            toast.error(error)
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <UserContext.Provider value={{ navigate, user, setUser, logout, loading, setLoading, isHidden, setIsHidden, loginRequest, userRegister, userToken, searchUser, techs, setTechs }}>
            {children}
        </UserContext.Provider>
    )
}