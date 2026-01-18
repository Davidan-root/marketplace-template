import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EnvioCreateWithoutPedidoInputObjectSchema as EnvioCreateWithoutPedidoInputObjectSchema } from './EnvioCreateWithoutPedidoInput.schema';
import { EnvioUncheckedCreateWithoutPedidoInputObjectSchema as EnvioUncheckedCreateWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateWithoutPedidoInput.schema';
import { EnvioCreateOrConnectWithoutPedidoInputObjectSchema as EnvioCreateOrConnectWithoutPedidoInputObjectSchema } from './EnvioCreateOrConnectWithoutPedidoInput.schema';
import { EnvioUpsertWithoutPedidoInputObjectSchema as EnvioUpsertWithoutPedidoInputObjectSchema } from './EnvioUpsertWithoutPedidoInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './EnvioWhereInput.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './EnvioWhereUniqueInput.schema';
import { EnvioUpdateToOneWithWhereWithoutPedidoInputObjectSchema as EnvioUpdateToOneWithWhereWithoutPedidoInputObjectSchema } from './EnvioUpdateToOneWithWhereWithoutPedidoInput.schema';
import { EnvioUpdateWithoutPedidoInputObjectSchema as EnvioUpdateWithoutPedidoInputObjectSchema } from './EnvioUpdateWithoutPedidoInput.schema';
import { EnvioUncheckedUpdateWithoutPedidoInputObjectSchema as EnvioUncheckedUpdateWithoutPedidoInputObjectSchema } from './EnvioUncheckedUpdateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EnvioCreateWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUncheckedCreateWithoutPedidoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EnvioCreateOrConnectWithoutPedidoInputObjectSchema).optional(),
  upsert: z.lazy(() => EnvioUpsertWithoutPedidoInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => EnvioWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => EnvioWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => EnvioWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EnvioUpdateToOneWithWhereWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUpdateWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUncheckedUpdateWithoutPedidoInputObjectSchema)]).optional()
}).strict();
export const EnvioUpdateOneWithoutPedidoNestedInputObjectSchema: z.ZodType<Prisma.EnvioUpdateOneWithoutPedidoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioUpdateOneWithoutPedidoNestedInput>;
export const EnvioUpdateOneWithoutPedidoNestedInputObjectZodSchema = makeSchema();
