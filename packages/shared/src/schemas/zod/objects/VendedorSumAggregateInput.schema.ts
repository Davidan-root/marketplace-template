import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  reputacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional(),
  estadoVendedorId: z.literal(true).optional()
}).strict();
export const VendedorSumAggregateInputObjectSchema: z.ZodType<Prisma.VendedorSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendedorSumAggregateInputType>;
export const VendedorSumAggregateInputObjectZodSchema = makeSchema();
