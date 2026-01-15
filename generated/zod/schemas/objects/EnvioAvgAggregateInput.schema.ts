import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numeroEnvio: z.literal(true).optional(),
  pedidoId: z.literal(true).optional()
}).strict();
export const EnvioAvgAggregateInputObjectSchema: z.ZodType<Prisma.EnvioAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EnvioAvgAggregateInputType>;
export const EnvioAvgAggregateInputObjectZodSchema = makeSchema();
