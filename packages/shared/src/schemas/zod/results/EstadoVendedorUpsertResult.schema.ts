import * as z from 'zod';
export const EstadoVendedorUpsertResultSchema = z.object({
  id: z.bigint(),
  descripcionEV: z.string(),
  nombreEV: z.string(),
  vendedores: z.array(z.unknown())
});