import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  metodoPago: z.literal(true).optional(),
  monto: z.literal(true).optional(),
  pedidoId: z.literal(true).optional()
}).strict();
export const PagoMinAggregateInputObjectSchema: z.ZodType<Prisma.PagoMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PagoMinAggregateInputType>;
export const PagoMinAggregateInputObjectZodSchema = makeSchema();
