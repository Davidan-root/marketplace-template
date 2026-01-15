import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './objects/PedidoItemSelect.schema';
import { PedidoItemIncludeObjectSchema as PedidoItemIncludeObjectSchema } from './objects/PedidoItemInclude.schema';
import { PedidoItemUpdateInputObjectSchema as PedidoItemUpdateInputObjectSchema } from './objects/PedidoItemUpdateInput.schema';
import { PedidoItemUncheckedUpdateInputObjectSchema as PedidoItemUncheckedUpdateInputObjectSchema } from './objects/PedidoItemUncheckedUpdateInput.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './objects/PedidoItemWhereUniqueInput.schema';

export const PedidoItemUpdateOneSchema: z.ZodType<Prisma.PedidoItemUpdateArgs> = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), data: z.union([PedidoItemUpdateInputObjectSchema, PedidoItemUncheckedUpdateInputObjectSchema]), where: PedidoItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PedidoItemUpdateArgs>;

export const PedidoItemUpdateOneZodSchema = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), data: z.union([PedidoItemUpdateInputObjectSchema, PedidoItemUncheckedUpdateInputObjectSchema]), where: PedidoItemWhereUniqueInputObjectSchema }).strict();