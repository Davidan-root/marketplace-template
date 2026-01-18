import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { UsuarioScalarRelationFilterObjectSchema as UsuarioScalarRelationFilterObjectSchema } from './UsuarioScalarRelationFilter.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { PedidoItemListRelationFilterObjectSchema as PedidoItemListRelationFilterObjectSchema } from './PedidoItemListRelationFilter.schema';
import { PagoListRelationFilterObjectSchema as PagoListRelationFilterObjectSchema } from './PagoListRelationFilter.schema';
import { EnvioNullableScalarRelationFilterObjectSchema as EnvioNullableScalarRelationFilterObjectSchema } from './EnvioNullableScalarRelationFilter.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './EnvioWhereInput.schema'

const pedidowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PedidoWhereInputObjectSchema), z.lazy(() => PedidoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PedidoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PedidoWhereInputObjectSchema), z.lazy(() => PedidoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  fechaHoraAlta: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  numeroPedido: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalPrecio: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  usuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  usuario: z.union([z.lazy(() => UsuarioScalarRelationFilterObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
  pedidoItems: z.lazy(() => PedidoItemListRelationFilterObjectSchema).optional(),
  pagos: z.lazy(() => PagoListRelationFilterObjectSchema).optional(),
  envio: z.union([z.lazy(() => EnvioNullableScalarRelationFilterObjectSchema), z.lazy(() => EnvioWhereInputObjectSchema)]).optional()
}).strict();
export const PedidoWhereInputObjectSchema: z.ZodType<Prisma.PedidoWhereInput> = pedidowhereinputSchema as unknown as z.ZodType<Prisma.PedidoWhereInput>;
export const PedidoWhereInputObjectZodSchema = pedidowhereinputSchema;
