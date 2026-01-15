import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  comentario: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  puntaje: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional()
}).strict();
export const ResenaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResenaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaMaxOrderByAggregateInput>;
export const ResenaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
