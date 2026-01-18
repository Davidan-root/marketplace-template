import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionEV: z.literal(true).optional(),
  nombreEV: z.literal(true).optional()
}).strict();
export const EstadoVendedorMaxAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorMaxAggregateInputType>;
export const EstadoVendedorMaxAggregateInputObjectZodSchema = makeSchema();
