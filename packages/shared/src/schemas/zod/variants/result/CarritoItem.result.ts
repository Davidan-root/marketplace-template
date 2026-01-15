import * as z from 'zod';
// prettier-ignore
export const CarritoItemResultSchema = z.object({
    id: z.bigint(),
    cantidadCI: z.number().int(),
    carritoId: z.bigint(),
    carrito: z.unknown(),
    publicacionId: z.bigint(),
    publicacion: z.unknown()
}).strict();

export type CarritoItemResultType = z.infer<typeof CarritoItemResultSchema>;
