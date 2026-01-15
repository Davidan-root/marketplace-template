import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './objects/PedidoItemSelect.schema';
import { PedidoItemIncludeObjectSchema as PedidoItemIncludeObjectSchema } from './objects/PedidoItemInclude.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './objects/PedidoItemWhereUniqueInput.schema';

export const PedidoItemFindUniqueOrThrowSchema: z.ZodType<Prisma.PedidoItemFindUniqueOrThrowArgs> = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), where: PedidoItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PedidoItemFindUniqueOrThrowArgs>;

export const PedidoItemFindUniqueOrThrowZodSchema = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), where: PedidoItemWhereUniqueInputObjectSchema }).strict();