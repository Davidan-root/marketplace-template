import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  comentario: z.string(),
  fechaHoraAlta: z.coerce.date().optional(),
  puntaje: z.number().int(),
  productoId: z.bigint()
}).strict();
export const ResenaCreateManyInputObjectSchema: z.ZodType<Prisma.ResenaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCreateManyInput>;
export const ResenaCreateManyInputObjectZodSchema = makeSchema();
