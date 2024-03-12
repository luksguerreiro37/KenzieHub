import { z } from "zod"

export const editScheme = z.object({
  status: z.string()
})