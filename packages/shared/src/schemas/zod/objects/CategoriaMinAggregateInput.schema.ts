import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionCategoria: z.literal(true).optional(),
  nombreCategoria: z.literal(true).optional()
}).strict();
export const CategoriaMinAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaMinAggregateInputType>;
export const CategoriaMinAggregateInputObjectZodSchema = makeSchema();
