import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PedidoOrderByWithRelationInputObjectSchema as PedidoOrderByWithRelationInputObjectSchema } from './PedidoOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  estadoEnvio: SortOrderSchema.optional(),
  numeroEnvio: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  pedido: z.lazy(() => PedidoOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const EnvioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EnvioOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioOrderByWithRelationInput>;
export const EnvioOrderByWithRelationInputObjectZodSchema = makeSchema();
