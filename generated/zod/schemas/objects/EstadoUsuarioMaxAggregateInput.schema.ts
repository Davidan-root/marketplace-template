import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionEU: z.literal(true).optional(),
  nombreEU: z.literal(true).optional()
}).strict();
export const EstadoUsuarioMaxAggregateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioMaxAggregateInputType>;
export const EstadoUsuarioMaxAggregateInputObjectZodSchema = makeSchema();
