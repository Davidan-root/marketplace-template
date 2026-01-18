import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema';
import { PedidoUpdateWithoutPedidoItemsInputObjectSchema as PedidoUpdateWithoutPedidoItemsInputObjectSchema } from './PedidoUpdateWithoutPedidoItemsInput.schema';
import { PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema as PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema } from './PedidoUncheckedUpdateWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PedidoUpdateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema)])
}).strict();
export const PedidoUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoUpdateToOneWithWhereWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateToOneWithWhereWithoutPedidoItemsInput>;
export const PedidoUpdateToOneWithWhereWithoutPedidoItemsInputObjectZodSchema = makeSchema();
