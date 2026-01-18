import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoArgsObjectSchema as PedidoArgsObjectSchema } from './PedidoArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  estadoEnvio: z.boolean().optional(),
  numeroEnvio: z.boolean().optional(),
  pedidoId: z.boolean().optional(),
  pedido: z.union([z.boolean(), z.lazy(() => PedidoArgsObjectSchema)]).optional()
}).strict();
export const EnvioSelectObjectSchema: z.ZodType<Prisma.EnvioSelect> = makeSchema() as unknown as z.ZodType<Prisma.EnvioSelect>;
export const EnvioSelectObjectZodSchema = makeSchema();
