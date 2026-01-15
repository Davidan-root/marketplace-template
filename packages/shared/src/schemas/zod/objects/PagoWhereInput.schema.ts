import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { PedidoScalarRelationFilterObjectSchema as PedidoScalarRelationFilterObjectSchema } from './PedidoScalarRelationFilter.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const pagowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PagoWhereInputObjectSchema), z.lazy(() => PagoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PagoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PagoWhereInputObjectSchema), z.lazy(() => PagoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  metodoPago: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  monto: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  pedido: z.union([z.lazy(() => PedidoScalarRelationFilterObjectSchema), z.lazy(() => PedidoWhereInputObjectSchema)]).optional()
}).strict();
export const PagoWhereInputObjectSchema: z.ZodType<Prisma.PagoWhereInput> = pagowhereinputSchema as unknown as z.ZodType<Prisma.PagoWhereInput>;
export const PagoWhereInputObjectZodSchema = pagowhereinputSchema;
