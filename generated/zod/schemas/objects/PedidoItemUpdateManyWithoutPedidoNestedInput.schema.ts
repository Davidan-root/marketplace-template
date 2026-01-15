import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemCreateWithoutPedidoInputObjectSchema as PedidoItemCreateWithoutPedidoInputObjectSchema } from './PedidoItemCreateWithoutPedidoInput.schema';
import { PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPedidoInput.schema';
import { PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema as PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema } from './PedidoItemCreateOrConnectWithoutPedidoInput.schema';
import { PedidoItemUpsertWithWhereUniqueWithoutPedidoInputObjectSchema as PedidoItemUpsertWithWhereUniqueWithoutPedidoInputObjectSchema } from './PedidoItemUpsertWithWhereUniqueWithoutPedidoInput.schema';
import { PedidoItemCreateManyPedidoInputEnvelopeObjectSchema as PedidoItemCreateManyPedidoInputEnvelopeObjectSchema } from './PedidoItemCreateManyPedidoInputEnvelope.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemUpdateWithWhereUniqueWithoutPedidoInputObjectSchema as PedidoItemUpdateWithWhereUniqueWithoutPedidoInputObjectSchema } from './PedidoItemUpdateWithWhereUniqueWithoutPedidoInput.schema';
import { PedidoItemUpdateManyWithWhereWithoutPedidoInputObjectSchema as PedidoItemUpdateManyWithWhereWithoutPedidoInputObjectSchema } from './PedidoItemUpdateManyWithWhereWithoutPedidoInput.schema';
import { PedidoItemScalarWhereInputObjectSchema as PedidoItemScalarWhereInputObjectSchema } from './PedidoItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemCreateWithoutPedidoInputObjectSchema).array(), z.lazy(() => PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemCreateOrConnectWithoutPedidoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PedidoItemUpsertWithWhereUniqueWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUpsertWithWhereUniqueWithoutPedidoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PedidoItemCreateManyPedidoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PedidoItemUpdateWithWhereUniqueWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUpdateWithWhereUniqueWithoutPedidoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PedidoItemUpdateManyWithWhereWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUpdateManyWithWhereWithoutPedidoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PedidoItemScalarWhereInputObjectSchema), z.lazy(() => PedidoItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PedidoItemUpdateManyWithoutPedidoNestedInputObjectSchema: z.ZodType<Prisma.PedidoItemUpdateManyWithoutPedidoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpdateManyWithoutPedidoNestedInput>;
export const PedidoItemUpdateManyWithoutPedidoNestedInputObjectZodSchema = makeSchema();
