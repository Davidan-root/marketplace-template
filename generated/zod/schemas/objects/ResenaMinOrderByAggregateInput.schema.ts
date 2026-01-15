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
export const ResenaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResenaMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaMinOrderByAggregateInput>;
export const ResenaMinOrderByAggregateInputObjectZodSchema = makeSchema();
