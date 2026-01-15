import * as z from 'zod';
export const PublicacionFindManyResultSchema = z.object({
  data: z.array(z.object({
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