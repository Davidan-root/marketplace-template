import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PedidoOrderByWithRelationInputObjectSchema as PedidoOrderByWithRelationInputObjectSchema } from './PedidoOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  metodoPago: SortOrderSchema.optional(),
  monto: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  pedido: z.lazy(() => PedidoOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PagoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PagoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoOrderByWithRelationInput>;
export const PagoOrderByWithRelationInputObjectZodSchema = makeSchema();
