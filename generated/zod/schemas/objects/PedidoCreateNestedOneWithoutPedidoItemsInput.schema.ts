import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateWithoutPedidoItemsInputObjectSchema as PedidoCreateWithoutPedidoItemsInputObjectSchema } from './PedidoCreateWithoutPedidoItemsInput.schema';
import { PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema as PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PedidoUncheckedCreateWithoutPedidoItemsInput.schema';
import { PedidoCreateOrConnectWithoutPedidoItemsInputObjectSchema as PedidoCreateOrConnectWithoutPedidoItemsInputObjectSchema } from './PedidoCreateOrConnectWithoutPedidoItemsInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PedidoCreateOrConnectWithoutPedidoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => PedidoWhereUniqueInputObjectSchema).optional()
}).strict();
export const PedidoCreateNestedOneWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoCreateNestedOneWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateNestedOneWithoutPedidoItemsInput>;
export const PedidoCreateNestedOneWithoutPedidoItemsInputObjectZodSchema = makeSchema();
