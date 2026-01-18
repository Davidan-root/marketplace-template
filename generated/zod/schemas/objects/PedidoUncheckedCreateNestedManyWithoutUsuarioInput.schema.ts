import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateWithoutUsuarioInputObjectSchema as PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema as PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema';
import { PedidoCreateOrConnectWithoutUsuarioInputObjectSchema as PedidoCreateOrConnectWithoutUsuarioInputObjectSchema } from './PedidoCreateOrConnectWithoutUsuarioInput.schema';
import { PedidoCreateManyUsuarioInputEnvelopeObjectSchema as PedidoCreateManyUsuarioInputEnvelopeObjectSchema } from './PedidoCreateManyUsuarioInputEnvelope.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema).array(), z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PedidoCreateOrConnectWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoCreateOrConnectWithoutUsuarioInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PedidoCreateManyUsuarioInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PedidoWhereUniqueInputObjectSchema), z.lazy(() => PedidoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedCreateNestedManyWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedCreateNestedManyWithoutUsuarioInput>;
export const PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectZodSchema = makeSchema();
