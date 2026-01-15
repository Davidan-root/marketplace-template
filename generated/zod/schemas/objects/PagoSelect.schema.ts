import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoArgsObjectSchema as PedidoArgsObjectSchema } from './PedidoArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  metodoPago: z.boolean().optional(),
  monto: z.boolean().optional(),
  pedidoId: z.boolean().optional(),
  pedido: z.union([z.boolean(), z.lazy(() => PedidoArgsObjectSchema)]).optional()
}).strict();
export const PagoSelectObjectSchema: z.ZodType<Prisma.PagoSelect> = makeSchema() as unknown as z.ZodType<Prisma.PagoSelect>;
export const PagoSelectObjectZodSchema = makeSchema();
