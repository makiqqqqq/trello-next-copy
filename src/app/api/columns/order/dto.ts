import {z} from "zod";

export const updateColumnsOrderDto = z.array(z.object({
    id: z.string().uuid(),
    order: z.number()
}))