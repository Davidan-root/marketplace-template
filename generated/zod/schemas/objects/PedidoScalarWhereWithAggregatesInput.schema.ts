import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

const pedidoscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PedidoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PedidoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PedidoScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PedidoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PedidoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  numeroPedido: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  totalPrecio: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  usuarioId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PedidoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PedidoScalarWhereWithAggregatesInput> = pedidoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PedidoScalarWhereWithAggregatesInput>;
export const PedidoScalarWhereWithAggregatesInputObjectZodSchema = pedidoscalarwherewithaggregatesinputSchema;
