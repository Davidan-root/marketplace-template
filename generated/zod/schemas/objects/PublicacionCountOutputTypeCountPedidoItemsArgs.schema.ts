import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './PedidoItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereInputObjectSchema).optional()
}).strict();
export const PublicacionCountOutputTypeCountPedidoItemsArgsObjectSchema = makeSchema();
export const PublicacionCountOutputTypeCountPedidoItemsArgsObjectZodSchema = makeSchema();
