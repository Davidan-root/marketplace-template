import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionEU: z.literal(true).optional(),
  nombreEU: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EstadoUsuarioCountAggregateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCountAggregateInputType>;
export const EstadoUsuarioCountAggregateInputObjectZodSchema = makeSchema();
