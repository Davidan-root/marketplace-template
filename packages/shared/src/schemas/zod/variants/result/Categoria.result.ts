import * as z from 'zod';
// prettier-ignore
export const CategoriaResultSchema = z.object({
    id: z.bigint(),
    descripcionCategoria: z.string(),
    nombreCategoria: z.string(),
    productos: z.array(z.unknown())
}).strict();

export type CategoriaResultType = z.infer<typeof CategoriaResultSchema>;
