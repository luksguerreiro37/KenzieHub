import { z } from "zod"

export const registerScheme = z.object({
    name: z.string().nonempty("Nome obrigatorio!"),
  email: z
    .string()
    .nonempty("Email obrigatorio!")
    .email("Forneca um email valido"),
  password: z
    .string()
    .nonempty("Senha obrigatoria!")
    .min(8, "Sao necessarios pelo menos oito caracteres")
    .regex(/[A-Z]+/, "E necessario ao menos uma letra maiuscula")
    .regex(/[a-z]+/, "E necessario ao menos uma letra minuscula")
    .regex(/[0-9]+/, "E necessario ao menos um numero"),
    confirmPassword: z.string().nonempty("Confirmacao de senha e obrigatoria"),
    bio: z.string().nonempty("Escreva sobre voce"),
    contact: z.string().nonempty("Escreva uma opcao de contato"),
    course_module: z.string()
}).refine(({password, confirmPassword})=> password===confirmPassword, {
  message: "As senhas nao correspondem",
  path:["confirmPassword"]

})