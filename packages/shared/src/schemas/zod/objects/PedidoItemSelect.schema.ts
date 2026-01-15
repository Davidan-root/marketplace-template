import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoArgsObjectSchema as PedidoArgsObjectSchema } from './PedidoArgs.schema';
import { PublicacionArgsObjectSchema as PublicacionArgsObjectSchema } from './PublicacionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  cantidadPI: z.boolean().optional(),
  precioUnitario: z.boolean().optional(),
  subtotalPI: z.boolean().optional(),
  pedidoId: z.boolean().optional(),
  pedido: z.union([z.boolean(), z.lazy(() => PedidoArgsObjectSchema)]).optional(),
  publicacionId: z.boolean().optional(),
  publicacion: z.union([z.boolean(), z.lazy(() => PublicacionArgsObjectSchema)]).optional()
}).strict();
export const PedidoItemSelectObjectSchema: z.ZodType<Prisma.PedidoItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemSelect>;
export const PedidoItemSelectObjectZodSchema = makeSchema();
