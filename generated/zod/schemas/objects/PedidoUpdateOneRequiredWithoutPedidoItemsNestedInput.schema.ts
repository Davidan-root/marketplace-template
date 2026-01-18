import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateWithoutPedidoItemsInputObjectSchema as PedidoCreateWithoutPedidoItemsInputObjectSchema } from './PedidoCreateWithoutPedidoItemsInput.schema';
import { PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema as PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PedidoUncheckedCreateWithoutPedidoItemsInput.schema';
import { PedidoCreateOrConnectWithoutPedidoItemsInputObjectSchema as PedidoCreateOrConnectWithoutPedidoItemsInputObjectSchema } from './PedidoCreateOrConnectWithoutPedidoItemsInput.schema';
import { PedidoUpsertWithoutPedidoItemsInputObjectSchema as PedidoUpsertWithoutPedidoItemsInputObjectSchema } from './PedidoUpsertWithoutPedidoItemsInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema as PedidoUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema } from './PedidoUpdateToOneWithWhereWithoutPedidoItemsInput.schema';
import { PedidoUpdateWithoutPedidoItemsInputObjectSchema as PedidoUpdateWithoutPedidoItemsInputObjectSchema } from './PedidoUpdateWithoutPedidoItemsInput.schema';
import { PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema as PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema } from './PedidoUncheckedUpdateWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PedidoCreateOrConnectWithoutPedidoItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => PedidoUpsertWithoutPedidoItemsInputObjectSchema).optional(),
  connect: z.lazy(() => PedidoWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PedidoUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUpdateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema)]).optional()
}).strict();
export const PedidoUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema: z.ZodType<Prisma.PedidoUpdateOneRequiredWithoutPedidoItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateOneRequiredWithoutPedidoItemsNestedInput>;
export const PedidoUpdateOneRequiredWithoutPedidoItemsNestedInputObjectZodSchema = makeSchema();
