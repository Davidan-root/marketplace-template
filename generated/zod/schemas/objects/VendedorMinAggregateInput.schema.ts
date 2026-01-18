import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  nombreTienda: z.literal(true).optional(),
  reputacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional(),
  estadoVendedorId: z.literal(true).optional()
}).strict();
export const VendedorMinAggregateInputObjectSchema: z.ZodType<Prisma.VendedorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendedorMinAggregateInputType>;
export const VendedorMinAggregateInputObjectZodSchema = makeSchema();
