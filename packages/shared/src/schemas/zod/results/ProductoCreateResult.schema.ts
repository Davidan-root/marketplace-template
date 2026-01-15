import * as z from 'zod';
export const ProductoCreateResultSchema = z.object({
  id: z.bigint(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoriaId: z.bigint(),
  categoria: z.unknown(),
  publicaciones: z.array(z.unknown()),
  resenas: z.array(z.unknown())
});