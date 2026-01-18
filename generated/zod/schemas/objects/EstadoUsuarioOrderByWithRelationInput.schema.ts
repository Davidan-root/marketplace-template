import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuarioOrderByRelationAggregateInputObjectSchema as UsuarioOrderByRelationAggregateInputObjectSchema } from './UsuarioOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEU: SortOrderSchema.optional(),
  nombreEU: SortOrderSchema.optional(),
  usuarios: z.lazy(() => UsuarioOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioOrderByWithRelationInput>;
export const EstadoUsuarioOrderByWithRelationInputObjectZodSchema = makeSchema();
