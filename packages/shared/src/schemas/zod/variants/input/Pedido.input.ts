import * as z from 'zod';
// prettier-ignore
export const PedidoInputSchema = z.object({
    id: z.bigint(),
    fechaHoraAlta: z.date(),
    numeroPedido: z.number().int(),
    totalPrecio: z.number(),
    usuarioId: z.bigint(),
    usuario: z.unknown(),
    pedidoItems: z.array(z.unknown()),
    pagos: z.array(z.unknown()),
    envio: z.unknown().optional().nullable()
}).strict();

export type PedidoInputType = z.infer<typeof PedidoInputSchema>;
