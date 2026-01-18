import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const pedidoitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PedidoItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PedidoItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PedidoItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PedidoItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PedidoItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  cantidadPI: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  precioUnitario: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  subtotalPI: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  publicacionId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PedidoItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PedidoItemScalarWhereWithAggregatesInput> = pedidoitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PedidoItemScalarWhereWithAggregatesInput>;
export const PedidoItemScalarWhereWithAggregatesInputObjectZodSchema = pedidoitemscalarwherewithaggregatesinputSchema;
