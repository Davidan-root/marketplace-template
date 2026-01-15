import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionCreateWithoutPedidoItemsInputObjectSchema as PublicacionCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateWithoutPedidoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PublicacionCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema)])
}).strict();
export const PublicacionCreateOrConnectWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionCreateOrConnectWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateOrConnectWithoutPedidoItemsInput>;
export const PublicacionCreateOrConnectWithoutPedidoItemsInputObjectZodSchema = makeSchema();
