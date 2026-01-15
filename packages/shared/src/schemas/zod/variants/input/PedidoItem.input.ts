import * as z from 'zod';
// prettier-ignore
export const PedidoItemInputSchema = z.object({
    id: z.bigint(),
    cantidadPI: z.number().int(),
    precioUnitario: z.number(),
    subtotalPI: z.number(),
    pedidoId: z.bigint(),
    pedido: z.unknown(),
    publicacionId: z.bigint(),
    publicacion: z.unknown()
}).strict();

export type PedidoItemInputType = z.infer<typeof PedidoItemInputSchema>;
