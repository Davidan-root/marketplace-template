import * as z from 'zod';
export const PagoFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.bigint(),
  metodoPago: z.string(),
  monto: z.number(),
  pedidoId: z.bigint(),
  pedido: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});