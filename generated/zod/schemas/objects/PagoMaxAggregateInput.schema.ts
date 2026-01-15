import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  metodoPago: z.literal(true).optional(),
  monto: z.literal(true).optional(),
  pedidoId: z.literal(true).optional()
}).strict();
export const PagoMaxAggregateInputObjectSchema: z.ZodType<Prisma.PagoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PagoMaxAggregateInputType>;
export const PagoMaxAggregateInputObjectZodSchema = makeSchema();
