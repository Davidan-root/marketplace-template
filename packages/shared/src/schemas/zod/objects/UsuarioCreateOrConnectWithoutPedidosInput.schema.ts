import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutPedidosInputObjectSchema as UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema as UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UsuarioCreateWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutPedidosInputObjectSchema)])
}).strict();
export const UsuarioCreateOrConnectWithoutPedidosInputObjectSchema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutPedidosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateOrConnectWithoutPedidosInput>;
export const UsuarioCreateOrConnectWithoutPedidosInputObjectZodSchema = makeSchema();
