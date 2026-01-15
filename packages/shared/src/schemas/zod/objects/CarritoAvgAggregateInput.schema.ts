import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  usuarioId: z.literal(true).optional()
}).strict();
export const CarritoAvgAggregateInputObjectSchema: z.ZodType<Prisma.CarritoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoAvgAggregateInputType>;
export const CarritoAvgAggregateInputObjectZodSchema = makeSchema();
