import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioUpdateWithoutPedidosInputObjectSchema as UsuarioUpdateWithoutPedidosInputObjectSchema } from './UsuarioUpdateWithoutPedidosInput.schema';
import { UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema as UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutPedidosInput.schema';
import { UsuarioCreateWithoutPedidosInputObjectSchema as UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema as UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UsuarioUpdateWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioCreateWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutPedidosInputObjectSchema)]),
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const UsuarioUpsertWithoutPedidosInputObjectSchema: z.ZodType<Prisma.UsuarioUpsertWithoutPedidosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpsertWithoutPedidosInput>;
export const UsuarioUpsertWithoutPedidosInputObjectZodSchema = makeSchema();
