import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemCreateWithoutPublicacionInputObjectSchema as PedidoItemCreateWithoutPublicacionInputObjectSchema } from './PedidoItemCreateWithoutPublicacionInput.schema';
import { PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema as PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPublicacionInput.schema';
import { PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema as PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema } from './PedidoItemCreateOrConnectWithoutPublicacionInput.schema';
import { PedidoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema as PedidoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema } from './PedidoItemUpsertWithWhereUniqueWithoutPublicacionInput.schema';
import { PedidoItemCreateManyPublicacionInputEnvelopeObjectSchema as PedidoItemCreateManyPublicacionInputEnvelopeObjectSchema } from './PedidoItemCreateManyPublicacionInputEnvelope.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema as PedidoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema } from './PedidoItemUpdateWithWhereUniqueWithoutPublicacionInput.schema';
import { PedidoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema as PedidoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema } from './PedidoItemUpdateManyWithWhereWithoutPublicacionInput.schema';
import { PedidoItemScalarWhereInputObjectSchema as PedidoItemScalarWhereInputObjectSchema } from './PedidoItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemCreateWithoutPublicacionInputObjectSchema).array(), z.lazy(() => PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PedidoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PedidoItemCreateManyPublicacionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PedidoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PedidoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PedidoItemScalarWhereInputObjectSchema), z.lazy(() => PedidoItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectSchema: z.ZodType<Prisma.PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInput>;
export const PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectZodSchema = makeSchema();
