import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cantidadCI: z.literal(true).optional(),
  carritoId: z.literal(true).optional(),
  publicacionId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CarritoItemCountAggregateInputObjectSchema: z.ZodType<Prisma.CarritoItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCountAggregateInputType>;
export const CarritoItemCountAggregateInputObjectZodSchema = makeSchema();
