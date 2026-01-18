import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemUpdateWithoutPublicacionInputObjectSchema as PedidoItemUpdateWithoutPublicacionInputObjectSchema } from './PedidoItemUpdateWithoutPublicacionInput.schema';
import { PedidoItemUncheckedUpdateWithoutPublicacionInputObjectSchema as PedidoItemUncheckedUpdateWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedUpdateWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PedidoItemUpdateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUncheckedUpdateWithoutPublicacionInputObjectSchema)])
}).strict();
export const PedidoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemUpdateWithWhereUniqueWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpdateWithWhereUniqueWithoutPublicacionInput>;
export const PedidoItemUpdateWithWhereUniqueWithoutPublicacionInputObjectZodSchema = makeSchema();
