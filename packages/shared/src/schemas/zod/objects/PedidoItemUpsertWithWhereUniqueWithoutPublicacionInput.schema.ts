import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemUpdateWithoutPublicacionInputObjectSchema as PedidoItemUpdateWithoutPublicacionInputObjectSchema } from './PedidoItemUpdateWithoutPublicacionInput.schema';
import { PedidoItemUncheckedUpdateWithoutPublicacionInputObjectSchema as PedidoItemUncheckedUpdateWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedUpdateWithoutPublicacionInput.schema';
import { PedidoItemCreateWithoutPublicacionInputObjectSchema as PedidoItemCreateWithoutPublicacionInputObjectSchema } from './PedidoItemCreateWithoutPublicacionInput.schema';
import { PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema as PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PedidoItemUpdateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUncheckedUpdateWithoutPublicacionInputObjectSchema)]),
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema)])
}).strict();
export const PedidoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemUpsertWithWhereUniqueWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpsertWithWhereUniqueWithoutPublicacionInput>;
export const PedidoItemUpsertWithWhereUniqueWithoutPublicacionInputObjectZodSchema = makeSchema();
