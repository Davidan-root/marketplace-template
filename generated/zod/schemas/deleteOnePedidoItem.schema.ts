import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './objects/PedidoItemSelect.schema';
import { PedidoItemIncludeObjectSchema as PedidoItemIncludeObjectSchema } from './objects/PedidoItemInclude.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './objects/PedidoItemWhereUniqueInput.schema';

export const PedidoItemDeleteOneSchema: z.ZodType<Prisma.PedidoItemDeleteArgs> = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), where: PedidoItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PedidoItemDeleteArgs>;

export const PedidoItemDeleteOneZodSchema = z.object({ select: PedidoItemSelectObjectSchema.optional(), include: PedidoItemIncludeObjectSchema.optional(), where: PedidoItemWhereUniqueInputObjectSchema }).strict();