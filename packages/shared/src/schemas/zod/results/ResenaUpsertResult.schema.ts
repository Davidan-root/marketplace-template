import * as z from 'zod';
export const ResenaUpsertResultSchema = z.object({
  id: z.bigint(),
  comentario: z.string(),
  fechaHoraAlta: z.date(),
  puntaje: z.number().int(),
  productoId: z.bigint(),
  producto: z.unknown()
});