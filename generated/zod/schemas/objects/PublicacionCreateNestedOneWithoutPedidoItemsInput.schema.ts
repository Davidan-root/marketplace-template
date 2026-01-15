import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateWithoutPedidoItemsInputObjectSchema as PublicacionCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateWithoutPedidoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutPedidoItemsInput.schema';
import { PublicacionCreateOrConnectWithoutPedidoItemsInputObjectSchema as PublicacionCreateOrConnectWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateOrConnectWithoutPedidoItemsInput.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublicacionCreateOrConnectWithoutPedidoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => PublicacionWhereUniqueInputObjectSchema).optional()
}).strict();
export const PublicacionCreateNestedOneWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionCreateNestedOneWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateNestedOneWithoutPedidoItemsInput>;
export const PublicacionCreateNestedOneWithoutPedidoItemsInputObjectZodSchema = makeSchema();
