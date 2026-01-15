import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  estadoEnvio: z.literal(true).optional(),
  numeroEnvio: z.literal(true).optional(),
  pedidoId: z.literal(true).optional()
}).strict();
export const EnvioMinAggregateInputObjectSchema: z.ZodType<Prisma.EnvioMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EnvioMinAggregateInputType>;
export const EnvioMinAggregateInputObjectZodSchema = makeSchema();
