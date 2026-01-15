import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionCategoria: z.literal(true).optional(),
  nombreCategoria: z.literal(true).optional()
}).strict();
export const CategoriaMaxAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaMaxAggregateInputType>;
export const CategoriaMaxAggregateInputObjectZodSchema = makeSchema();
