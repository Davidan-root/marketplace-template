import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemCreateWithoutPedidoInputObjectSchema as PedidoItemCreateWithoutPedidoInputObjectSchema } from './PedidoItemCreateWithoutPedidoInput.schema';
import { PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPedidoInput.schema';
import { PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema as PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema } from './PedidoItemCreateOrConnectWithoutPedidoInput.schema';
import { PedidoItemCreateManyPedidoInputEnvelopeObjectSchema as PedidoItemCreateManyPedidoInputEnvelopeObjectSchema } from './PedidoItemCreateManyPedidoInputEnvelope.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemCreateWithoutPedidoInputObjectSchema).array(), z.lazy(() => PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PedidoItemCreateManyPedidoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemUncheckedCreateNestedManyWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUncheckedCreateNestedManyWithoutPedidoInput>;
export const PedidoItemUncheckedCreateNestedManyWithoutPedidoInputObjectZodSchema = makeSchema();
