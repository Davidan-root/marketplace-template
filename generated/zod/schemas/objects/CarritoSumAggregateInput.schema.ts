import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  usuarioId: z.literal(true).optional()
}).strict();
export const CarritoSumAggregateInputObjectSchema: z.ZodType<Prisma.CarritoSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoSumAggregateInputType>;
export const CarritoSumAggregateInputObjectZodSchema = makeSchema();
