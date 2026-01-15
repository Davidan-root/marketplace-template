import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './objects/PedidoItemSelect.schema';
import { PedidoItemIncludeObjectSchema as PedidoItemIncludeObjectSchema } from './objects/PedidoItemInclude.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './objects/PedidoItemWhereUniqueInput.schema';
import { PedidoItemCreateInputObjectSchema as PedidoItemCreateInputObjectSchema } from './objects/PedidoItemCreateInput.schema';
import { PedidoItemUncheckedCreateInputObjectSchema as PedidoItemUncheckedCreateInputObjectSchema } from './objects/PedidoItemUncheckedCreateInput.schema';
import { PedidoItemUpdateInputObjectSchema as PedidoItemUpdateInputObjectSchema } from './objects/PedidoItemUpdateInput.schema';
import { PedidoItemUncheckedUpdateInputObjectSchema as PedidoItemUncheckedUpdateInputObjectSchema } from './objects/PedidoItemUncheckedUpdateInput.schema';

export const PedidoItemUpsertOneSchema: z.ZodType<Prisma.PedidoItemUpsertArgs> = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), where: PedidoItemWhereUniqueInputObjectSchema, create: z.union([ PedidoItemCreateInputObjectSchema, PedidoItemUncheckedCreateInputObjectSchema ]), update: z.union([ PedidoItemUpdateInputObjectSchema, PedidoItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PedidoItemUpsertArgs>;

export const PedidoItemUpsertOneZodSchema = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), where: PedidoItemWhereUniqueInputObjectSchema, create: z.union([ PedidoItemCreateInputObjectSchema, PedidoItemUncheckedCreateInputObjectSchema ]), update: z.union([ PedidoItemUpdateInputObjectSchema, PedidoItemUncheckedUpdateInputObjectSchema ]) }).strict();