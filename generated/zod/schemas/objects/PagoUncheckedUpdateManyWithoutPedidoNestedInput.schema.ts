import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoCreateWithoutPedidoInputObjectSchema as PagoCreateWithoutPedidoInputObjectSchema } from './PagoCreateWithoutPedidoInput.schema';
import { PagoUncheckedCreateWithoutPedidoInputObjectSchema as PagoUncheckedCreateWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateWithoutPedidoInput.schema';
import { PagoCreateOrConnectWithoutPedidoInputObjectSchema as PagoCreateOrConnectWithoutPedidoInputObjectSchema } from './PagoCreateOrConnectWithoutPedidoInput.schema';
import { PagoUpsertWithWhereUniqueWithoutPedidoInputObjectSchema as PagoUpsertWithWhereUniqueWithoutPedidoInputObjectSchema } from './PagoUpsertWithWhereUniqueWithoutPedidoInput.schema';
import { PagoCreateManyPedidoInputEnvelopeObjectSchema as PagoCreateManyPedidoInputEnvelopeObjectSchema } from './PagoCreateManyPedidoInputEnvelope.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './PagoWhereUniqueInput.schema';
import { PagoUpdateWithWhereUniqueWithoutPedidoInputObjectSchema as PagoUpdateWithWhereUniqueWithoutPedidoInputObjectSchema } from './PagoUpdateWithWhereUniqueWithoutPedidoInput.schema';
import { PagoUpdateManyWithWhereWithoutPedidoInputObjectSchema as PagoUpdateManyWithWhereWithoutPedidoInputObjectSchema } from './PagoUpdateManyWithWhereWithoutPedidoInput.schema';
import { PagoScalarWhereInputObjectSchema as PagoScalarWhereInputObjectSchema } from './PagoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PagoCreateWithoutPedidoInputObjectSchema), z.lazy(() => PagoCreateWithoutPedidoInputObjectSchema).array(), z.lazy(() => PagoUncheckedCreateWithoutPedidoInputObjectSchema), z.lazy(() => PagoUncheckedCreateWithoutPedidoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PagoCreateOrConnectWithoutPedidoInputObjectSchema), z.lazy(() => PagoCreateOrConnectWithoutPedidoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PagoUpsertWithWhereUniqueWithoutPedidoInputObjectSchema), z.lazy(() => PagoUpsertWithWhereUniqueWithoutPedidoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PagoCreateManyPedidoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PagoWhereUniqueInputObjectSchema), z.lazy(() => PagoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PagoWhereUniqueInputObjectSchema), z.lazy(() => PagoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PagoWhereUniqueInputObjectSchema), z.lazy(() => PagoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PagoWhereUniqueInputObjectSchema), z.lazy(() => PagoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PagoUpdateWithWhereUniqueWithoutPedidoInputObjectSchema), z.lazy(() => PagoUpdateWithWhereUniqueWithoutPedidoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PagoUpdateManyWithWhereWithoutPedidoInputObjectSchema), z.lazy(() => PagoUpdateManyWithWhereWithoutPedidoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PagoScalarWhereInputObjectSchema), z.lazy(() => PagoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PagoUncheckedUpdateManyWithoutPedidoNestedInputObjectSchema: z.ZodType<Prisma.PagoUncheckedUpdateManyWithoutPedidoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUncheckedUpdateManyWithoutPedidoNestedInput>;
export const PagoUncheckedUpdateManyWithoutPedidoNestedInputObjectZodSchema = makeSchema();
