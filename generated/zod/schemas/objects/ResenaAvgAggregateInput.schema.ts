import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  puntaje: z.literal(true).optional(),
  productoId: z.literal(true).optional()
}).strict();
export const ResenaAvgAggregateInputObjectSchema: z.ZodType<Prisma.ResenaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResenaAvgAggregateInputType>;
export const ResenaAvgAggregateInputObjectZodSchema = makeSchema();
