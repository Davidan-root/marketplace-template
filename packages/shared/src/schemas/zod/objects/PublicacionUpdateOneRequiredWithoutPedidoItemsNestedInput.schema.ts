import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateWithoutPedidoItemsInputObjectSchema as PublicacionCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateWithoutPedidoItemsInput.schema';
import { PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema as PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PublicacionUncheckedCreateWithoutPedidoItemsInput.schema';
import { PublicacionCreateOrConnectWithoutPedidoItemsInputObjectSchema as PublicacionCreateOrConnectWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateOrConnectWithoutPedidoItemsInput.schema';
import { PublicacionUpsertWithoutPedidoItemsInputObjectSchema as PublicacionUpsertWithoutPedidoItemsInputObjectSchema } from './PublicacionUpsertWithoutPedidoItemsInput.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './PublicacionWhereUniqueInput.schema';
import { PublicacionUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema as PublicacionUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema } from './PublicacionUpdateToOneWithWhereWithoutPedidoItemsInput.schema';
import { PublicacionUpdateWithoutPedidoItemsInputObjectSchema as PublicacionUpdateWithoutPedidoItemsInputObjectSchema } from './PublicacionUpdateWithoutPedidoItemsInput.schema';
import { PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema as PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema } from './PublicacionUncheckedUpdateWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PublicacionCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PublicacionCreateOrConnectWithoutPedidoItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => PublicacionUpsertWithoutPedidoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => PublicacionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PublicacionUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUpdateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema)]).optional()
}).strict();
export const PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInput>;
export const PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectZodSchema = makeSchema();
