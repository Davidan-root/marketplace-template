import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendedorOrderByRelationAggregateInputObjectSchema as VendedorOrderByRelationAggregateInputObjectSchema } from './VendedorOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEV: SortOrderSchema.optional(),
  nombreEV: SortOrderSchema.optional(),
  vendedores: z.lazy(() => VendedorOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EstadoVendedorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EstadoVendedorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorOrderByWithRelationInput>;
export const EstadoVendedorOrderByWithRelationInputObjectZodSchema = makeSchema();
