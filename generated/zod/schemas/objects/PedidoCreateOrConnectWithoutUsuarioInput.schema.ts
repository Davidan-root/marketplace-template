import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoCreateWithoutUsuarioInputObjectSchema as PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema as PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const PedidoCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoCreateOrConnectWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateOrConnectWithoutUsuarioInput>;
export const PedidoCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
