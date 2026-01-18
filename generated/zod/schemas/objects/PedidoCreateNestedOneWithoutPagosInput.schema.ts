import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateWithoutPagosInputObjectSchema as PedidoCreateWithoutPagosInputObjectSchema } from './PedidoCreateWithoutPagosInput.schema';
import { PedidoUncheckedCreateWithoutPagosInputObjectSchema as PedidoUncheckedCreateWithoutPagosInputObjectSchema } from './PedidoUncheckedCreateWithoutPagosInput.schema';
import { PedidoCreateOrConnectWithoutPagosInputObjectSchema as PedidoCreateOrConnectWithoutPagosInputObjectSchema } from './PedidoCreateOrConnectWithoutPagosInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PedidoCreateWithoutPagosInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPagosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PedidoCreateOrConnectWithoutPagosInputObjectSchema).optional(),
  connect: z.lazy(() => PedidoWhereUniqueInputObjectSchema).optional()
}).strict();
export const PedidoCreateNestedOneWithoutPagosInputObjectSchema: z.ZodType<Prisma.PedidoCreateNestedOneWithoutPagosInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCreateNestedOneWithoutPagosInput>;
export const PedidoCreateNestedOneWithoutPagosInputObjectZodSchema = makeSchema();
