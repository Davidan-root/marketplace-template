import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const EstadoVendedorSumAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorSumAggregateInputType>;
export const EstadoVendedorSumAggregateInputObjectZodSchema = makeSchema();
