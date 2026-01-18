import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const EstadoUsuarioSumAggregateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioSumAggregateInputType>;
export const EstadoUsuarioSumAggregateInputObjectZodSchema = makeSchema();
