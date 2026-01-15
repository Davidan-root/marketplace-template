import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cantidadCI: z.literal(true).optional(),
  carritoId: z.literal(true).optional(),
  publicacionId: z.literal(true).optional()
}).strict();
export const CarritoItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.CarritoItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemAvgAggregateInputType>;
export const CarritoItemAvgAggregateInputObjectZodSchema = makeSchema();
