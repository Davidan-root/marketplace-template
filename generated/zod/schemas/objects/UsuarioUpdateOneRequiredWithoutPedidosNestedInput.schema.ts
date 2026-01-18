import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioCreateWithoutPedidosInputObjectSchema as UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema as UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema';
import { UsuarioCreateOrConnectWithoutPedidosInputObjectSchema as UsuarioCreateOrConnectWithoutPedidosInputObjectSchema } from './UsuarioCreateOrConnectWithoutPedidosInput.schema';
import { UsuarioUpsertWithoutPedidosInputObjectSchema as UsuarioUpsertWithoutPedidosInputObjectSchema } from './UsuarioUpsertWithoutPedidosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateToOneWithWhereWithoutPedidosInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutPedidosInputObjectSchema } from './UsuarioUpdateToOneWithWhereWithoutPedidosInput.schema';
import { UsuarioUpdateWithoutPedidosInputObjectSchema as UsuarioUpdateWithoutPedidosInputObjectSchema } from './UsuarioUpdateWithoutPedidosInput.schema';
import { UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema as UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutPedidosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UsuarioCreateWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutPedidosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutPedidosInputObjectSchema).optional(),
  upsert: z.lazy(() => UsuarioUpsertWithoutPedidosInputObjectSchema).optional(),
  connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UsuarioUpdateToOneWithWhereWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUpdateWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema)]).optional()
}).strict();
export const UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutPedidosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutPedidosNestedInput>;
export const UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectZodSchema = makeSchema();
