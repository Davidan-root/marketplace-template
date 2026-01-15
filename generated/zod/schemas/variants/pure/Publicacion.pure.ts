import * as z from 'zod';
// prettier-ignore
export const PublicacionModelSchema = z.object({
    id: z.bigint(),
    condicionesVenta: z.string(),
    enviosVenta: z.boolean(),
    precioVenta: z.number(),
    stockVenta: z.number().int(),
    vendedorId: z.bigint(),
    vendedor: z.unknown(),
    productoId: z.bigint(),
    producto: z.unknown(),
    carritoItems: z.array(z.unknown()),
    pedidoItems: z.array(z.unknown())
}).strict();

export type PublicacionPureType = z.infer<typeof PublicacionModelSchema>;
