import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  condicionesVenta: z.literal(true).optional(),
  enviosVenta: z.literal(true).optional(),
  precioVenta: z.literal(true).optional(),
  stockVenta: z.literal(true).optional(),
  vendedorId: z.literal(true).optional(),
  productoId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PublicacionCountAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCountAggregateInputType>;
export const PublicacionCountAggregateInputObjectZodSchema = makeSchema();
