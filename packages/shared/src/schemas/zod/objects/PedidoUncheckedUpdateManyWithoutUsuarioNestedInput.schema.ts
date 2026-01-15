import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoCreateWithoutUsuarioInputObjectSchema as PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema as PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema';
import { PedidoCreateOrConnectWithoutUsuarioInputObjectSchema as PedidoCreateOrConnectWithoutUsuarioInputObjectSchema } from './PedidoCreateOrConnectWithoutUsuarioInput.schema';
import { PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema as PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from './PedidoUpsertWithWhereUniqueWithoutUsuarioInput.schema';
import { PedidoCreateManyUsuarioInputEnvelopeObjectSchema as PedidoCreateManyUsuarioInputEnvelopeObjectSchema } from './PedidoCreateManyUsuarioInputEnvelope.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema as PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from './PedidoUpdateWithWhereUniqueWithoutUsuarioInput.schema';
import { PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema as PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from './PedidoUpdateManyWithWhereWithoutUsuarioInput.schema';
import { PedidoScalarWhereInputObjectSchema as PedidoScalarWhereInputObjectSchema } from './PedidoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PedidoCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PedidoCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PedidoWhereUniqueInputObjectSchema), z.lazy(() => PedidoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PedidoWhereUniqueInputObjectSchema), z.lazy(() => PedidoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PedidoWhereUniqueInputObjectSchema), z.lazy(() => PedidoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PedidoWhereUniqueInputObjectSchema), z.lazy(() => PedidoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PedidoScalarWhereInputObjectSchema), z.lazy(() => PedidoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedUpdateManyWithoutUsuarioNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedUpdateManyWithoutUsuarioNestedInput>;
export const PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
