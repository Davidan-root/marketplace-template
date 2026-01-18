import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCountOutputTypeCountPedidoItemsArgsObjectSchema as PedidoCountOutputTypeCountPedidoItemsArgsObjectSchema } from './PedidoCountOutputTypeCountPedidoItemsArgs.schema';
import { PedidoCountOutputTypeCountPagosArgsObjectSchema as PedidoCountOutputTypeCountPagosArgsObjectSchema } from './PedidoCountOutputTypeCountPagosArgs.schema'

const makeSchema = () => z.object({
  pedidoItems: z.union([z.boolean(), z.lazy(() => PedidoCountOutputTypeCountPedidoItemsArgsObjectSchema)]).optional(),
  pagos: z.union([z.boolean(), z.lazy(() => PedidoCountOutputTypeCountPagosArgsObjectSchema)]).optional()
}).strict();
export const PedidoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PedidoCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCountOutputTypeSelect>;
export const PedidoCountOutputTypeSelectObjectZodSchema = makeSchema();
