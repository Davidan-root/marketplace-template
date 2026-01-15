import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoCreateWithoutPedidoItemsInputObjectSchema as PedidoCreateWithoutPedidoItemsInputObjectSchema } from './PedidoCreateWithoutPedidoItemsInput.schema';
import { PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema as PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PedidoUncheckedCreateWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PedidoCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema)])
}).strict();
export const PedidoCreateOrConnectWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoCreateOrConnectWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateOrConnectWithoutPedidoItemsInput>;
export const PedidoCreateOrConnectWithoutPedidoItemsInputObjectZodSchema = makeSchema();
