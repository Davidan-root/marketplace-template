import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemCreateWithoutPublicacionInputObjectSchema as PedidoItemCreateWithoutPublicacionInputObjectSchema } from './PedidoItemCreateWithoutPublicacionInput.schema';
import { PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema as PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPublicacionInput.schema';
import { PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema as PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema } from './PedidoItemCreateOrConnectWithoutPublicacionInput.schema';
import { PedidoItemCreateManyPublicacionInputEnvelopeObjectSchema as PedidoItemCreateManyPublicacionInputEnvelopeObjectSchema } from './PedidoItemCreateManyPublicacionInputEnvelope.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemCreateWithoutPublicacionInputObjectSchema).array(), z.lazy(() => PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PedidoItemCreateManyPublicacionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PedidoItemWhereUniqueInputObjectSchema), z.lazy(() => PedidoItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemUncheckedCreateNestedManyWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUncheckedCreateNestedManyWithoutPublicacionInput>;
export const PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectZodSchema = makeSchema();
