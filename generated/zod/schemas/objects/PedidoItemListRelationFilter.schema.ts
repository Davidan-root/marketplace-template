import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './PedidoItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PedidoItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => PedidoItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => PedidoItemWhereInputObjectSchema).optional()
}).strict();
export const PedidoItemListRelationFilterObjectSchema: z.ZodType<Prisma.PedidoItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemListRelationFilter>;
export const PedidoItemListRelationFilterObjectZodSchema = makeSchema();
