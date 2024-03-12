import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export const TechProvider = ({children}) => {
    const { userToken, searchUser, techs, setTechs } = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [editingTech, setEditingTech] = useState({})

    const createRequest = async (formData) => {
        try {
            const { data } = await api.post("/users/techs", formData, {
                headers:{
                    Authorization: `Bearer ${userToken}`
                }
            })
            toast.success("Tech criada com sucesso!")
            setOpen(false)
            searchUser()
        } catch (error) {
            toast.error("Não foi possivel criar a Tech")
        }
    }

    const editRequest = async (formData,id) => {
        try {
            const { data } = await api.put(`/users/techs/${id}`, formData, {
                headers:{
                    Authorization: `Bearer ${userToken}`
                }
            })
            toast.success("Tech alterada com sucesso!")
            setOpenEdit(false)
            searchUser()
        } catch (error) {
            toast.error("Não foi possivel alterar a Tech")
        }
    }

    const deleteRequest = async (id) => {
        try {
            await api.delete(`/users/techs/${id}`, {
                headers:{
                    Authorization: `Bearer ${userToken}`
                }
            })
            toast.success("Tech excluída com sucesso!")
            searchUser()
        } catch (error) {
            toast.error(error)
        }
    }
return(
    <TechContext.Provider value={{ createRequest, open, setOpen, deleteRequest, openEdit, setOpenEdit, editRequest, setEditingTech, editingTech }}>
        {children}
    </TechContext.Provider>
)
}