import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  comentario: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  puntaje: z.literal(true).optional(),
  productoId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ResenaCountAggregateInputObjectSchema: z.ZodType<Prisma.ResenaCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCountAggregateInputType>;
export const ResenaCountAggregateInputObjectZodSchema = makeSchema();
