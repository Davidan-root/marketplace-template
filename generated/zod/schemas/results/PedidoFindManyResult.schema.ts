import * as z from 'zod';
export const PedidoFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.bigint(),
  fechaHoraAlta: z.date(),
  numeroPedido: z.number().int(),
  totalPrecio: z.number(),
  usuarioId: z.bigint(),
  usuario: z.unknown(),
  pedidoItems: z.array(z.unknown()),
  pagos: z.array(z.unknown()),
  envio: z.unknown().optional()
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