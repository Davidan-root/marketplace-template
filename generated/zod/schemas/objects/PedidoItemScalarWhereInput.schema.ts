import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const pedidoitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PedidoItemScalarWhereInputObjectSchema), z.lazy(() => PedidoItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PedidoItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PedidoItemScalarWhereInputObjectSchema), z.lazy(() => PedidoItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  cantidadPI: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  precioUnitario: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  subtotalPI: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  publicacionId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PedidoItemScalarWhereInputObjectSchema: z.ZodType<Prisma.PedidoItemScalarWhereInput> = pedidoitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.PedidoItemScalarWhereInput>;
export const PedidoItemScalarWhereInputObjectZodSchema = pedidoitemscalarwhereinputSchema;
