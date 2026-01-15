import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoCreateWithoutPagosInputObjectSchema as PedidoCreateWithoutPagosInputObjectSchema } from './PedidoCreateWithoutPagosInput.schema';
import { PedidoUncheckedCreateWithoutPagosInputObjectSchema as PedidoUncheckedCreateWithoutPagosInputObjectSchema } from './PedidoUncheckedCreateWithoutPagosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PedidoCreateWithoutPagosInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPagosInputObjectSchema)])
}).strict();
export const PedidoCreateOrConnectWithoutPagosInputObjectSchema: z.ZodType<Prisma.PedidoCreateOrConnectWithoutPagosInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateOrConnectWithoutPagosInput>;
export const PedidoCreateOrConnectWithoutPagosInputObjectZodSchema = makeSchema();
