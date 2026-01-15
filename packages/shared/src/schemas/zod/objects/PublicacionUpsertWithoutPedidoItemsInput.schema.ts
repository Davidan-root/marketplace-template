import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionUpdateWithoutPedidoItemsInputObjectSchema as PublicacionUpdateWithoutPedidoItemsInputObjectSchema } from './PublicacionUpdateWithoutPedidoItemsInput.schema';
import { PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema as PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema } from './PublicacionUncheckedUpdateWithoutPedidoItemsInput.schema';
import { PublicacionCreateWithoutPedidoItemsInputObjectSchema as PublicacionCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateWithoutPedidoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutPedidoItemsInput.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PublicacionUpdateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => PublicacionCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema)]),
  where: z.lazy(() => PublicacionWhereInputObjectSchema).optional()
}).strict();
export const PublicacionUpsertWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionUpsertWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpsertWithoutPedidoItemsInput>;
export const PublicacionUpsertWithoutPedidoItemsInputObjectZodSchema = makeSchema();
