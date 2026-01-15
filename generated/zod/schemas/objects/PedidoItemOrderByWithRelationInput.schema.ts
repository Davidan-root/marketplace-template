import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PedidoOrderByWithRelationInputObjectSchema as PedidoOrderByWithRelationInputObjectSchema } from './PedidoOrderByWithRelationInput.schema';
import { PublicacionOrderByWithRelationInputObjectSchema as PublicacionOrderByWithRelationInputObjectSchema } from './PublicacionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadPI: SortOrderSchema.optional(),
  precioUnitario: SortOrderSchema.optional(),
  subtotalPI: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional(),
  pedido: z.lazy(() => PedidoOrderByWithRelationInputObjectSchema).optional(),
  publicacion: z.lazy(() => PublicacionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PedidoItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PedidoItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemOrderByWithRelationInput>;
export const PedidoItemOrderByWithRelationInputObjectZodSchema = makeSchema();
