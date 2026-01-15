import * as z from 'zod';
export const CarritoDeleteResultSchema = z.nullable(z.object({
  id: z.bigint(),
  fechaHoraAlta: z.date(),
  fechaHoraBaja: z.date().optional(),
  fechaHoraModificacion: z.date().optional(),
  usuarioId: z.bigint(),
  usuario: z.unknown(),
  carritoItems: z.array(z.unknown())
}));