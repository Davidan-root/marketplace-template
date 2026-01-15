import * as z from 'zod';
export const PagoUpsertResultSchema = z.object({
  id: z.bigint(),
  metodoPago: z.string(),
  monto: z.number(),
  pedidoId: z.bigint(),
  pedido: z.unknown()
});