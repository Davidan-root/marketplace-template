import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './EnvioWhereUniqueInput.schema';
import { EnvioCreateWithoutPedidoInputObjectSchema as EnvioCreateWithoutPedidoInputObjectSchema } from './EnvioCreateWithoutPedidoInput.schema';
import { EnvioUncheckedCreateWithoutPedidoInputObjectSchema as EnvioUncheckedCreateWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EnvioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EnvioCreateWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUncheckedCreateWithoutPedidoInputObjectSchema)])
}).strict();
export const EnvioCreateOrConnectWithoutPedidoInputObjectSchema: z.ZodType<Prisma.EnvioCreateOrConnectWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioCreateOrConnectWithoutPedidoInput>;
export const EnvioCreateOrConnectWithoutPedidoInputObjectZodSchema = makeSchema();
