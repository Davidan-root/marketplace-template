import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './PedidoItemWhereUniqueInput.schema';
import { PedidoItemCreateWithoutPublicacionInputObjectSchema as PedidoItemCreateWithoutPublicacionInputObjectSchema } from './PedidoItemCreateWithoutPublicacionInput.schema';
import { PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema as PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedCreateWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PedidoItemCreateWithoutPublicacionInputObjectSchema), z.lazy(() => PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema)])
}).strict();
export const PedidoItemCreateOrConnectWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateOrConnectWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateOrConnectWithoutPublicacionInput>;
export const PedidoItemCreateOrConnectWithoutPublicacionInputObjectZodSchema = makeSchema();
