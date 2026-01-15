import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnvioCreateWithoutPedidoInputObjectSchema as EnvioCreateWithoutPedidoInputObjectSchema } from './EnvioCreateWithoutPedidoInput.schema';
import { EnvioUncheckedCreateWithoutPedidoInputObjectSchema as EnvioUncheckedCreateWithoutPedidoInputObjectSchema } from './EnvioUncheckedCreateWithoutPedidoInput.schema';
import { EnvioCreateOrConnectWithoutPedidoInputObjectSchema as EnvioCreateOrConnectWithoutPedidoInputObjectSchema } from './EnvioCreateOrConnectWithoutPedidoInput.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './EnvioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EnvioCreateWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUncheckedCreateWithoutPedidoInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EnvioCreateOrConnectWithoutPedidoInputObjectSchema).optional(),
  connect: z.lazy(() => EnvioWhereUniqueInputObjectSchema).optional()
}).strict();
export const EnvioCreateNestedOneWithoutPedidoInputObjectSchema: z.ZodType<Prisma.EnvioCreateNestedOneWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioCreateNestedOneWithoutPedidoInput>;
export const EnvioCreateNestedOneWithoutPedidoInputObjectZodSchema = makeSchema();
