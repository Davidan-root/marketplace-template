import * as z from 'zod';
export const ResenaFindUniqueResultSchema = z.nullable(z.object({
  id: z.bigint(),
  comentario: z.string(),
  fechaHoraAlta: z.date(),
  puntaje: z.number().int(),
  productoId: z.bigint(),
  producto: z.unknown()
}));