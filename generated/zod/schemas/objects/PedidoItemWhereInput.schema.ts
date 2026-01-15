import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { PedidoScalarRelationFilterObjectSchema as PedidoScalarRelationFilterObjectSchema } from './PedidoScalarRelationFilter.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema';
import { PublicacionScalarRelationFilterObjectSchema as PublicacionScalarRelationFilterObjectSchema } from './PublicacionScalarRelationFilter.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const pedidoitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PedidoItemWhereInputObjectSchema), z.lazy(() => PedidoItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PedidoItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PedidoItemWhereInputObjectSchema), z.lazy(() => PedidoItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  cantidadPI: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  precioUnitario: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  subtotalPI: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  pedidoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  publicacionId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  pedido: z.union([z.lazy(() => PedidoScalarRelationFilterObjectSchema), z.lazy(() => PedidoWhereInputObjectSchema)]).optional(),
  publicacion: z.union([z.lazy(() => PublicacionScalarRelationFilterObjectSchema), z.lazy(() => PublicacionWhereInputObjectSchema)]).optional()
}).strict();
export const PedidoItemWhereInputObjectSchema: z.ZodType<Prisma.PedidoItemWhereInput> = pedidoitemwhereinputSchema as unknown as z.ZodType<Prisma.PedidoItemWhereInput>;
export const PedidoItemWhereInputObjectZodSchema = pedidoitemwhereinputSchema;
