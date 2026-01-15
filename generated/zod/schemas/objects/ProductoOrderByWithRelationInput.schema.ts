import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoriaOrderByWithRelationInputObjectSchema as CategoriaOrderByWithRelationInputObjectSchema } from './CategoriaOrderByWithRelationInput.schema';
import { PublicacionOrderByRelationAggregateInputObjectSchema as PublicacionOrderByRelationAggregateInputObjectSchema } from './PublicacionOrderByRelationAggregateInput.schema';
import { ResenaOrderByRelationAggregateInputObjectSchema as ResenaOrderByRelationAggregateInputObjectSchema } from './ResenaOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionProducto: SortOrderSchema.optional(),
  nombreProducto: SortOrderSchema.optional(),
  categoriaId: SortOrderSchema.optional(),
  categoria: z.lazy(() => CategoriaOrderByWithRelationInputObjectSchema).optional(),
  publicaciones: z.lazy(() => PublicacionOrderByRelationAggregateInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoOrderByWithRelationInput>;
export const ProductoOrderByWithRelationInputObjectZodSchema = makeSchema();
