import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  fechaHoraBaja: SortOrderSchema.optional(),
  fechaHoraModificacion: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional()
}).strict();
export const CarritoMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CarritoMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoMaxOrderByAggregateInput>;
export const CarritoMaxOrderByAggregateInputObjectZodSchema = makeSchema();
