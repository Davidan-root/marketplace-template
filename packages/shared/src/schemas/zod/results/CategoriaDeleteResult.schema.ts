import * as z from 'zod';
export const CategoriaDeleteResultSchema = z.nullable(z.object({
  id: z.bigint(),
  descripcionCategoria: z.string(),
  nombreCategoria: z.string(),
  productos: z.array(z.unknown())
}));