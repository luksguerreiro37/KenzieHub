import { z } from "zod"

export const loginScheme = z.object({
  email: z
    .string()
    .nonempty("Email obrigatorio!"),
  password: z
    .string()
    .nonempty("Senha obrigatoria!")
    
})