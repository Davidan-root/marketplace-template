import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cantidadCI: z.literal(true).optional(),
  carritoId: z.literal(true).optional(),
  publicacionId: z.literal(true).optional()
}).strict();
export const CarritoItemSumAggregateInputObjectSchema: z.ZodType<Prisma.CarritoItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemSumAggregateInputType>;
export const CarritoItemSumAggregateInputObjectZodSchema = makeSchema();
