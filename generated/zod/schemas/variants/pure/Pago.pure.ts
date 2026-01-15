import * as z from 'zod';
// prettier-ignore
export const PagoModelSchema = z.object({
    id: z.bigint(),
    metodoPago: z.string(),
    monto: z.number(),
    pedidoId: z.bigint(),
    pedido: z.unknown()
}).strict();

export type PagoPureType = z.infer<typeof PagoModelSchema>;
