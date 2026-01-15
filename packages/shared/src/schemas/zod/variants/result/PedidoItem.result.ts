import * as z from 'zod';
// prettier-ignore
export const PedidoItemResultSchema = z.object({
    id: z.bigint(),
    cantidadPI: z.number().int(),
    precioUnitario: z.number(),
    subtotalPI: z.number(),
    pedidoId: z.bigint(),
    pedido: z.unknown(),
    publicacionId: z.bigint(),
    publicacion: z.unknown()
}).strict();

export type PedidoItemResultType = z.infer<typeof PedidoItemResultSchema>;
