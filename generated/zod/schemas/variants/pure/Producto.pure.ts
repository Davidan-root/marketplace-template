import * as z from 'zod';
// prettier-ignore
export const ProductoModelSchema = z.object({
    id: z.bigint(),
    descripcionProducto: z.string(),
    nombreProducto: z.string(),
    categoriaId: z.bigint(),
    categoria: z.unknown(),
    publicaciones: z.array(z.unknown()),
    resenas: z.array(z.unknown())
}).strict();

export type ProductoPureType = z.infer<typeof ProductoModelSchema>;
