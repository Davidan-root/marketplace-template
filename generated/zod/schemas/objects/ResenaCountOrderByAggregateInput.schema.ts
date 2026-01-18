import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  comentario: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  puntaje: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional()
}).strict();
export const ResenaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResenaCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaCountOrderByAggregateInput>;
export const ResenaCountOrderByAggregateInputObjectZodSchema = makeSchema();
