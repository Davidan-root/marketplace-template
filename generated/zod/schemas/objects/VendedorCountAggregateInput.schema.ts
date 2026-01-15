import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  nombreTienda: z.literal(true).optional(),
  reputacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional(),
  estadoVendedorId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VendedorCountAggregateInputObjectSchema: z.ZodType<Prisma.VendedorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCountAggregateInputType>;
export const VendedorCountAggregateInputObjectZodSchema = makeSchema();
