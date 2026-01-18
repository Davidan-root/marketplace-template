import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionEV: z.literal(true).optional(),
  nombreEV: z.literal(true).optional()
}).strict();
export const EstadoVendedorMinAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorMinAggregateInputType>;
export const EstadoVendedorMinAggregateInputObjectZodSchema = makeSchema();
