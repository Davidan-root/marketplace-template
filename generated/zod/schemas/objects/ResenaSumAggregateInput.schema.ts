import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  puntaje: z.literal(true).optional(),
  productoId: z.literal(true).optional()
}).strict();
export const ResenaSumAggregateInputObjectSchema: z.ZodType<Prisma.ResenaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResenaSumAggregateInputType>;
export const ResenaSumAggregateInputObjectZodSchema = makeSchema();
