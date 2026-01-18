import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  fechaHoraBaja: SortOrderSchema.optional(),
  fechaHoraModificacion: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional()
}).strict();
export const CarritoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CarritoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoMinOrderByAggregateInput>;
export const CarritoMinOrderByAggregateInputObjectZodSchema = makeSchema();
