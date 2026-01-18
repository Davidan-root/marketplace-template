import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { UsuarioUpdateWithoutPedidosInputObjectSchema as UsuarioUpdateWithoutPedidosInputObjectSchema } from './UsuarioUpdateWithoutPedidosInput.schema';
import { UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema as UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutPedidosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UsuarioUpdateWithoutPedidosInputObjectSchema), z.lazy(() => UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema)])
}).strict();
export const UsuarioUpdateToOneWithWhereWithoutPedidosInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutPedidosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateToOneWithWhereWithoutPedidosInput>;
export const UsuarioUpdateToOneWithWhereWithoutPedidosInputObjectZodSchema = makeSchema();
