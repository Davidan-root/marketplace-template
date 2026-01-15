import * as z from 'zod';
export const EstadoVendedorCreateResultSchema = z.object({
  id: z.bigint(),
  descripcionEV: z.string(),
  nombreEV: z.string(),
  vendedores: z.array(z.unknown())
});