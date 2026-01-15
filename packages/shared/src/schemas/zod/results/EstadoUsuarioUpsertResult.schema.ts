import * as z from 'zod';
export const EstadoUsuarioUpsertResultSchema = z.object({
  id: z.bigint(),
  descripcionEU: z.string(),
  nombreEU: z.string(),
  usuarios: z.array(z.unknown())
});