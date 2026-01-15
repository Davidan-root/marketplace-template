import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  comentario: z.string(),
  fechaHoraAlta: z.coerce.date().optional(),
  puntaje: z.number().int()
}).strict();
export const ResenaCreateManyProductoInputObjectSchema: z.ZodType<Prisma.ResenaCreateManyProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCreateManyProductoInput>;
export const ResenaCreateManyProductoInputObjectZodSchema = makeSchema();
