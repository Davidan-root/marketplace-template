import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemUpdateWithoutPedidoInputObjectSchema as PedidoItemUpdateWithoutPedidoInputObjectSchema } from './PedidoItemUpdateWithoutPedidoInput.schema';
import { PedidoItemUncheckedUpdateWithoutPedidoInputObjectSchema as PedidoItemUncheckedUpdateWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedUpdateWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PedidoItemUpdateWithoutPedidoInputObjectSchema), z.lazy(() => PedidoItemUncheckedUpdateWithoutPedidoInputObjectSchema)])
}).strict();
export const PedidoItemUpdateWithWhereUniqueWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemUpdateWithWhereUniqueWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpdateWithWhereUniqueWithoutPedidoInput>;
export const PedidoItemUpdateWithWhereUniqueWithoutPedidoInputObjectZodSchema = makeSchema();
