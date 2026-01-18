import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  precioVenta: z.literal(true).optional(),
  stockVenta: z.literal(true).optional(),
  vendedorId: z.literal(true).optional(),
  productoId: z.literal(true).optional()
}).strict();
export const PublicacionAvgAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionAvgAggregateInputType>;
export const PublicacionAvgAggregateInputObjectZodSchema = makeSchema();
