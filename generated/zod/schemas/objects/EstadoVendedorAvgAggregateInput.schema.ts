import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const EstadoVendedorAvgAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorAvgAggregateInputType>;
export const EstadoVendedorAvgAggregateInputObjectZodSchema = makeSchema();
