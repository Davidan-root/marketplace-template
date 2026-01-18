import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './PublicacionWhereInput.schema';
import { PublicacionUpdateWithoutPedidoItemsInputObjectSchema as PublicacionUpdateWithoutPedidoItemsInputObjectSchema } from './PublicacionUpdateWithoutPedidoItemsInput.schema';
import { PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema as PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema } from './PublicacionUncheckedUpdateWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PublicacionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PublicacionUpdateWithoutPedidoItemsInputObjectSchema), z.lazy(() => PublicacionUncheckedUpdateWithoutPedidoItemsInputObjectSchema)])
}).strict();
export const PublicacionUpdateToOneWithWhereWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateToOneWithWhereWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateToOneWithWhereWithoutPedidoItemsInput>;
export const PublicacionUpdateToOneWithWhereWithoutPedidoItemsInputObjectZodSchema = makeSchema();
