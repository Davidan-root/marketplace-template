import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCountOutputTypeCountCarritoItemsArgsObjectSchema as PublicacionCountOutputTypeCountCarritoItemsArgsObjectSchema } from './PublicacionCountOutputTypeCountCarritoItemsArgs.schema';
import { PublicacionCountOutputTypeCountPedidoItemsArgsObjectSchema as PublicacionCountOutputTypeCountPedidoItemsArgsObjectSchema } from './PublicacionCountOutputTypeCountPedidoItemsArgs.schema'

const makeSchema = () => z.object({
  carritoItems: z.union([z.boolean(), z.lazy(() => PublicacionCountOutputTypeCountCarritoItemsArgsObjectSchema)]).optional(),
  pedidoItems: z.union([z.boolean(), z.lazy(() => PublicacionCountOutputTypeCountPedidoItemsArgsObjectSchema)]).optional()
}).strict();
export const PublicacionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PublicacionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCountOutputTypeSelect>;
export const PublicacionCountOutputTypeSelectObjectZodSchema = makeSchema();
