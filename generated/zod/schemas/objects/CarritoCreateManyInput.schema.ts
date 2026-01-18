import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  fechaHoraAlta: z.coerce.date().optional(),
  fechaHoraBaja: z.coerce.date().optional().nullable(),
  fechaHoraModificacion: z.coerce.date().optional().nullable(),
  usuarioId: z.bigint()
}).strict();
export const CarritoCreateManyInputObjectSchema: z.ZodType<Prisma.CarritoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoCreateManyInput>;
export const CarritoCreateManyInputObjectZodSchema = makeSchema();
