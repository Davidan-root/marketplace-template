import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './EnvioWhereInput.schema';
import { EnvioUpdateWithoutPedidoInputObjectSchema as EnvioUpdateWithoutPedidoInputObjectSchema } from './EnvioUpdateWithoutPedidoInput.schema';
import { EnvioUncheckedUpdateWithoutPedidoInputObjectSchema as EnvioUncheckedUpdateWithoutPedidoInputObjectSchema } from './EnvioUncheckedUpdateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EnvioWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EnvioUpdateWithoutPedidoInputObjectSchema), z.lazy(() => EnvioUncheckedUpdateWithoutPedidoInputObjectSchema)])
}).strict();
export const EnvioUpdateToOneWithWhereWithoutPedidoInputObjectSchema: z.ZodType<Prisma.EnvioUpdateToOneWithWhereWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioUpdateToOneWithWhereWithoutPedidoInput>;
export const EnvioUpdateToOneWithWhereWithoutPedidoInputObjectZodSchema = makeSchema();
