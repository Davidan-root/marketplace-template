import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioCreateWithoutPedidosInputObjectSchema as UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema as UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema';
import { UsuarioCreateOrConnectWithoutPedidosInputObjectSchema as UsuarioCreateOrConnectWithoutPedidosInputObjectSchema } from './UsuarioCreateOrConnectWithoutPedidosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutPedidosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutPedidosInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional()
}).strict();
export const UsuarioCreateNestedOneWithoutPedidosInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutPedidosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutPedidosInput>;
export const UsuarioCreateNestedOneWithoutPedidosInputObjectZodSchema = makeSchema();
