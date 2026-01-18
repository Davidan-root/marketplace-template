import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  monto: z.literal(true).optional(),
  pedidoId: z.literal(true).optional()
}).strict();
export const PagoSumAggregateInputObjectSchema: z.ZodType<Prisma.PagoSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PagoSumAggregateInputType>;
export const PagoSumAggregateInputObjectZodSchema = makeSchema();
