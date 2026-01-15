import * as z from 'zod';
import type { Prisma } from '@prisma/client';
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
export const UsuarioCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCountOrderByAggregateInput>;
export const UsuarioCountOrderByAggregateInputObjectZodSchema = makeSchema();
