import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  precioVenta: z.literal(true).optional(),
  stockVenta: z.literal(true).optional(),
  vendedorId: z.literal(true).optional(),
  productoId: z.literal(true).optional()
}).strict();
export const PublicacionSumAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionSumAggregateInputType>;
export const PublicacionSumAggregateInputObjectZodSchema = makeSchema();
