import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductoOrderByRelationAggregateInputObjectSchema as ProductoOrderByRelationAggregateInputObjectSchema } from './ProductoOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionCategoria: SortOrderSchema.optional(),
  nombreCategoria: SortOrderSchema.optional(),
  productos: z.lazy(() => ProductoOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CategoriaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CategoriaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaOrderByWithRelationInput>;
export const CategoriaOrderByWithRelationInputObjectZodSchema = makeSchema();
