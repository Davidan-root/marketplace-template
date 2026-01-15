import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  estadoUsuarioId: z.literal(true).optional()
}).strict();
export const UsuarioSumAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioSumAggregateInputType>;
export const UsuarioSumAggregateInputObjectZodSchema = makeSchema();
