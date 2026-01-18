import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './objects/PedidoSelect.schema';
import { PedidoIncludeObjectSchema as PedidoIncludeObjectSchema } from './objects/PedidoInclude.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';

export const PedidoDeleteOneSchema: z.ZodType<Prisma.PedidoDeleteArgs> = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), where: PedidoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PedidoDeleteArgs>;

export const PedidoDeleteOneZodSchema = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), where: PedidoWhereUniqueInputObjectSchema }).strict();