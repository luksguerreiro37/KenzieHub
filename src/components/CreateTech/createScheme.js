import { z } from "zod"

export const createScheme = z.object({
  title: z.string().nonempty("Nome obrigatorio!"),
  status: z.string()
})