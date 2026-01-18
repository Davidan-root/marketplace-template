import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionCategoria: z.literal(true).optional(),
  nombreCategoria: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CategoriaCountAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaCountAggregateInputType>;
export const CategoriaCountAggregateInputObjectZodSchema = makeSchema();
