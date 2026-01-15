import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemScalarWhereInputObjectSchema as PedidoItemScalarWhereInputObjectSchema } from './PedidoItemScalarWhereInput.schema';
import { PedidoItemUpdateManyMutationInputObjectSchema as PedidoItemUpdateManyMutationInputObjectSchema } from './PedidoItemUpdateManyMutationInput.schema';
import { PedidoItemUncheckedUpdateManyWithoutPedidoInputObjectSchema as PedidoItemUncheckedUpdateManyWithoutPedidoInputObjectSchema } from './PedidoItemUncheckedUpdateManyWithoutPedidoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PedidoItemUpdateManyMutationInputObjectSchema), z.lazy(() => PedidoItemUncheckedUpdateManyWithoutPedidoInputObjectSchema)])
}).strict();
export const PedidoItemUpdateManyWithWhereWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemUpdateManyWithWhereWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpdateManyWithWhereWithoutPedidoInput>;
export const PedidoItemUpdateManyWithWhereWithoutPedidoInputObjectZodSchema = makeSchema();
