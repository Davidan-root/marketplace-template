import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  nombreTienda: z.literal(true).optional(),
  reputacion: z.literal(true).optional(),
  usuarioId: z.literal(true).optional(),
  estadoVendedorId: z.literal(true).optional()
}).strict();
export const VendedorMaxAggregateInputObjectSchema: z.ZodType<Prisma.VendedorMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VendedorMaxAggregateInputType>;
export const VendedorMaxAggregateInputObjectZodSchema = makeSchema();
