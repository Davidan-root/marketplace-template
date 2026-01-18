import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { PedidoScalarRelationFilterObjectSchema as PedidoScalarRelationFilterObjectSchema } from './PedidoScalarRelationFilter.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const enviowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EnvioWhereInputObjectSchema), z.lazy(() => EnvioWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EnvioWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EnvioWhereInputObjectSchema), z.lazy(() => EnvioWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  estadoEnvio: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numeroEnvio: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  pedido: z.union([z.lazy(() => PedidoScalarRelationFilterObjectSchema), z.lazy(() => PedidoWhereInputObjectSchema)]).optional()
}).strict();
export const EnvioWhereInputObjectSchema: z.ZodType<Prisma.EnvioWhereInput> = enviowhereinputSchema as unknown as z.ZodType<Prisma.EnvioWhereInput>;
export const EnvioWhereInputObjectZodSchema = enviowhereinputSchema;
