import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const pedidoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PedidoScalarWhereInputObjectSchema), z.lazy(() => PedidoScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PedidoScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PedidoScalarWhereInputObjectSchema), z.lazy(() => PedidoScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  numeroPedido: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalPrecio: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  usuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PedidoScalarWhereInputObjectSchema: z.ZodType<Prisma.PedidoScalarWhereInput> = pedidoscalarwhereinputSchema as unknown as z.ZodType<Prisma.PedidoScalarWhereInput>;
export const PedidoScalarWhereInputObjectZodSchema = pedidoscalarwhereinputSchema;
