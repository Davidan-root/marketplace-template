import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  comentario: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  puntaje: z.literal(true).optional(),
  productoId: z.literal(true).optional()
}).strict();
export const ResenaMaxAggregateInputObjectSchema: z.ZodType<Prisma.ResenaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResenaMaxAggregateInputType>;
export const ResenaMaxAggregateInputObjectZodSchema = makeSchema();
