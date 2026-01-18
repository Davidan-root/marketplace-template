import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  direccionUsuario: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  nombreUsuario: SortOrderSchema.optional(),
  numeroContacto: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  estadoUsuarioId: SortOrderSchema.optional()
}).strict();
export const UsuarioMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioMinOrderByAggregateInput>;
export const UsuarioMinOrderByAggregateInputObjectZodSchema = makeSchema();
