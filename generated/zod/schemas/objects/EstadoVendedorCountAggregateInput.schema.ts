import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionEV: z.literal(true).optional(),
  nombreEV: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EstadoVendedorCountAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCountAggregateInputType>;
export const EstadoVendedorCountAggregateInputObjectZodSchema = makeSchema();
