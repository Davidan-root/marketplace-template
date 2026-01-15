import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
  some: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
  none: z.lazy(() => PedidoWhereInputObjectSchema).optional()
}).strict();
export const PedidoListRelationFilterObjectSchema: z.ZodType<Prisma.PedidoListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PedidoListRelationFilter>;
export const PedidoListRelationFilterObjectZodSchema = makeSchema();
