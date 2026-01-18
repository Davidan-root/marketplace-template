import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoUpdateWithoutPedidoItemsInputObjectSchema as PedidoUpdateWithoutPedidoItemsInputObjectSchema } from './PedidoUpdateWithoutPedidoItemsInput.schema';
import { PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema as PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema } from './PedidoUncheckedUpdateWithoutPedidoItemsInput.schema';
import { PedidoCreateWithoutPedidoItemsInputObjectSchema as PedidoCreateWithoutPedidoItemsInputObjectSchema } from './PedidoCreateWithoutPedidoItemsInput.schema';
import { PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema as PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema } from './PedidoUncheckedCreateWithoutPedidoItemsInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PedidoUpdateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => PedidoCreateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPedidoItemsInputObjectSchema)]),
  where: z.lazy(() => PedidoWhereInputObjectSchema).optional()
}).strict();
export const PedidoUpsertWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoUpsertWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpsertWithoutPedidoItemsInput>;
export const PedidoUpsertWithoutPedidoItemsInputObjectZodSchema = makeSchema();
