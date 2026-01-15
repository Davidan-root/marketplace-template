import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemUpdateWithoutPedidoInputObjectSchema as PedidoItemUpdateWithoutPedidoInputObjectSchema } from './PedidoItemUpdateWithoutPedidoInput.schema';
import { PedidoItemUncheckedUpdateWithoutPedidoInputObjectSchema as PedidoItemUncheckedUpdateWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedUpdateWithoutPedidoInput.schema';
import { PedidoItemCreateWithoutPedidoInputObjectSchema as PedidoItemCreateWithoutPedidoInputObjectSchema } from './PedidoItemCreateWithoutPedidoInput.schema';
import { PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema as PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PedidoItemUpdateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUncheckedUpdateWithoutPedidoInputObjectSchema)]),
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema)])
}).strict();
export const PedidoItemUpsertWithWhereUniqueWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemUpsertWithWhereUniqueWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpsertWithWhereUniqueWithoutPedidoInput>;
export const PedidoItemUpsertWithWhereUniqueWithoutPedidoInputObjectZodSchema = makeSchema();
