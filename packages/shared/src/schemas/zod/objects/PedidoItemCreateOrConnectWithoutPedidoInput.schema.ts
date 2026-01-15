import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemCreateWithoutPedidoInputObjectSchema as PedidoItemCreateWithoutPedidoInputObjectSchema } from './PedidoItemCreateWithoutPedidoInput.schema';
import { PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema)])
}).strict();
export const PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateOrConnectWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateOrConnectWithoutPedidoInput>;
export const PedidoItemCreateOrConnectWithoutPedidoInputObjectZodSchema = makeSchema();
