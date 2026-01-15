import * as z from 'zod';
export const VendedorFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.bigint(),
  nombreTienda: z.string(),
  reputacion: z.number(),
  usuarioId: z.bigint(),
  usuario: z.unknown(),
  estadoVendedorId: z.bigint(),
  estadoVendedor: z.unknown(),
  publicaciones: z.array(z.unknown())
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