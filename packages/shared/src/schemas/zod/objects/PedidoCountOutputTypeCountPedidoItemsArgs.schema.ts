import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './PedidoItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereInputObjectSchema).optional()
}).strict();
export const PedidoCountOutputTypeCountPedidoItemsArgsObjectSchema = makeSchema();
export const PedidoCountOutputTypeCountPedidoItemsArgsObjectZodSchema = makeSchema();
