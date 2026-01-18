import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EnvioUpdateWithoutPedidoInputObjectSchema as EnvioUpdateWithoutPedidoInputObjectSchema } from './EnvioUpdateWithoutPedidoInput.schema';
import { EnvioUncheckedUpdateWithoutPedidoInputObjectSchema as EnvioUncheckedUpdateWithoutPedidoInputObjectSchema } from './EnvioUncheckedUpdateWithoutPedidoInput.schema';
import { EnvioCreateWithoutPedidoInputObjectSchema as EnvioCreateWithoutPedidoInputObjectSchema } from './EnvioCreateWithoutPedidoInput.schema';
import { EnvioUncheckedCreateWithoutPedidoInputObjectSchema as EnvioUncheckedCreateWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateWithoutPedidoInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './EnvioWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EnvioUpdateWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUncheckedUpdateWithoutPedidoInputObjectSchema)]),
  create: z.union([z.lazy(() => EnvioCreateWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUncheckedCreateWithoutPedidoInputObjectSchema)]),
  where: z.lazy(() => EnvioWhereInputObjectSchema).optional()
}).strict();
export const EnvioUpsertWithoutPedidoInputObjectSchema: z.ZodType<Prisma.EnvioUpsertWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioUpsertWithoutPedidoInput>;
export const EnvioUpsertWithoutPedidoInputObjectZodSchema = makeSchema();
