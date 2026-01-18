import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoCreateWithoutPedidoInputObjectSchema as PagoCreateWithoutPedidoInputObjectSchema } from './PagoCreateWithoutPedidoInput.schema';
import { PagoUncheckedCreateWithoutPedidoInputObjectSchema as PagoUncheckedCreateWithoutPedidoInputObjectSchema } from './PagoUncheckedCreateWithoutPedidoInput.schema';
import { PagoCreateOrConnectWithoutPedidoInputObjectSchema as PagoCreateOrConnectWithoutPedidoInputObjectSchema } from './PagoCreateOrConnectWithoutPedidoInput.schema';
import { PagoCreateManyPedidoInputEnvelopeObjectSchema as PagoCreateManyPedidoInputEnvelopeObjectSchema } from './PagoCreateManyPedidoInputEnvelope.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './PagoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PagoCreateWithoutPedidoInputObjectSchema), z.lazy(() => PagoCreateWithoutPedidoInputObjectSchema).array(), z.lazy(() => PagoUncheckedCreateWithoutPedidoInputObjectSchema), z.lazy(() => PagoUncheckedCreateWithoutPedidoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PagoCreateOrConnectWithoutPedidoInputObjectSchema), z.lazy(() => PagoCreateOrConnectWithoutPedidoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PagoCreateManyPedidoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PagoWhereUniqueInputObjectSchema), z.lazy(() => PagoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PagoUncheckedCreateNestedManyWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PagoUncheckedCreateNestedManyWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUncheckedCreateNestedManyWithoutPedidoInput>;
export const PagoUncheckedCreateNestedManyWithoutPedidoInputObjectZodSchema = makeSchema();
