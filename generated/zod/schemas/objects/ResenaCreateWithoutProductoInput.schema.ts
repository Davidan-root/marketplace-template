import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  comentario: z.string(),
  fechaHoraAlta: z.coerce.date().optional(),
  puntaje: z.number().int()
}).strict();
export const ResenaCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.ResenaCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCreateWithoutProductoInput>;
export const ResenaCreateWithoutProductoInputObjectZodSchema = makeSchema();
