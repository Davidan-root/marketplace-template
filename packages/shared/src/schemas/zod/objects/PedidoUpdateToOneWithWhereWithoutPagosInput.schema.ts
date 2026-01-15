import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema';
import { PedidoUpdateWithoutPagosInputObjectSchema as PedidoUpdateWithoutPagosInputObjectSchema } from './PedidoUpdateWithoutPagosInput.schema';
import { PedidoUncheckedUpdateWithoutPagosInputObjectSchema as PedidoUncheckedUpdateWithoutPagosInputObjectSchema } from './PedidoUncheckedUpdateWithoutPagosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PedidoUpdateWithoutPagosInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutPagosInputObjectSchema)])
}).strict();
export const PedidoUpdateToOneWithWhereWithoutPagosInputObjectSchema: z.ZodType<Prisma.PedidoUpdateToOneWithWhereWithoutPagosInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateToOneWithWhereWithoutPagosInput>;
export const PedidoUpdateToOneWithWhereWithoutPagosInputObjectZodSchema = makeSchema();
