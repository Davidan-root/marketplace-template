import * as z from 'zod';
export const VendedorFindUniqueResultSchema = z.nullable(z.object({
  id: z.bigint(),
  nombreTienda: z.string(),
  reputacion: z.number(),
  usuarioId: z.bigint(),
  usuario: z.unknown(),
  estadoVendedorId: z.bigint(),
  estadoVendedor: z.unknown(),
  publicaciones: z.array(z.unknown())
}));