import * as z from 'zod';
export const EstadoUsuarioUpdateResultSchema = z.nullable(z.object({
  id: z.bigint(),
  descripcionEU: z.string(),
  nombreEU: z.string(),
  usuarios: z.array(z.unknown())
}));