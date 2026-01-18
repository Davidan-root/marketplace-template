import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoItemScalarWhereInputObjectSchema as PedidoItemScalarWhereInputObjectSchema } from './PedidoItemScalarWhereInput.schema';
import { PedidoItemUpdateManyMutationInputObjectSchema as PedidoItemUpdateManyMutationInputObjectSchema } from './PedidoItemUpdateManyMutationInput.schema';
import { PedidoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema as PedidoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedUpdateManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PedidoItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PedidoItemUpdateManyMutationInputObjectSchema), z.lazy(() => PedidoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema)])
}).strict();
export const PedidoItemUpdateManyWithWhereWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemUpdateManyWithWhereWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpdateManyWithWhereWithoutPublicacionInput>;
export const PedidoItemUpdateManyWithWhereWithoutPublicacionInputObjectZodSchema = makeSchema();
