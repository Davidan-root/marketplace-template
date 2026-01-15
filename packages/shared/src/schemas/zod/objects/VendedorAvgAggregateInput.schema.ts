import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  reputacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional(),
  estadoVendedorId: z.literal(true).optional()
}).strict();
export const VendedorAvgAggregateInputObjectSchema: z.ZodType<Prisma.VendedorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendedorAvgAggregateInputType>;
export const VendedorAvgAggregateInputObjectZodSchema = makeSchema();
