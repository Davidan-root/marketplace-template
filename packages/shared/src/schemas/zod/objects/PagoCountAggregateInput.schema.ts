import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  metodoPago: z.literal(true).optional(),
  monto: z.literal(true).optional(),
  pedidoId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PagoCountAggregateInputObjectSchema: z.ZodType<Prisma.PagoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PagoCountAggregateInputType>;
export const PagoCountAggregateInputObjectZodSchema = makeSchema();
