import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  monto: z.literal(true).optional(),
  pedidoId: z.literal(true).optional()
}).strict();
export const PagoAvgAggregateInputObjectSchema: z.ZodType<Prisma.PagoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PagoAvgAggregateInputType>;
export const PagoAvgAggregateInputObjectZodSchema = makeSchema();
