import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoUpdateWithoutPagosInputObjectSchema as PedidoUpdateWithoutPagosInputObjectSchema } from './PedidoUpdateWithoutPagosInput.schema';
import { PedidoUncheckedUpdateWithoutPagosInputObjectSchema as PedidoUncheckedUpdateWithoutPagosInputObjectSchema } from './PedidoUncheckedUpdateWithoutPagosInput.schema';
import { PedidoCreateWithoutPagosInputObjectSchema as PedidoCreateWithoutPagosInputObjectSchema } from './PedidoCreateWithoutPagosInput.schema';
import { PedidoUncheckedCreateWithoutPagosInputObjectSchema as PedidoUncheckedCreateWithoutPagosInputObjectSchema } from './PedidoUncheckedCreateWithoutPagosInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PedidoUpdateWithoutPagosInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutPagosInputObjectSchema)]),
  create: z.union([z.lazy(() => PedidoCreateWithoutPagosInputObjectSchema), z.lazy(() => PedidoUncheckedCreateWithoutPagosInputObjectSchema)]),
  where: z.lazy(() => PedidoWhereInputObjectSchema).optional()
}).strict();
export const PedidoUpsertWithoutPagosInputObjectSchema: z.ZodType<Prisma.PedidoUpsertWithoutPagosInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpsertWithoutPagosInput>;
export const PedidoUpsertWithoutPagosInputObjectZodSchema = makeSchema();
