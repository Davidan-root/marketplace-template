import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductoOrderByWithRelationInputObjectSchema as ProductoOrderByWithRelationInputObjectSchema } from './ProductoOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  comentario: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  puntaje: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional(),
  producto: z.lazy(() => ProductoOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ResenaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ResenaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaOrderByWithRelationInput>;
export const ResenaOrderByWithRelationInputObjectZodSchema = makeSchema();
