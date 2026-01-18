import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './objects/PedidoSelect.schema';
import { PedidoIncludeObjectSchema as PedidoIncludeObjectSchema } from './objects/PedidoInclude.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';

export const PedidoFindUniqueOrThrowSchema: z.ZodType<Prisma.PedidoFindUniqueOrThrowArgs> = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), where: PedidoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PedidoFindUniqueOrThrowArgs>;

export const PedidoFindUniqueOrThrowZodSchema = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), where: PedidoWhereUniqueInputObjectSchema }).strict();