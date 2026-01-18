import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './objects/PedidoSelect.schema';
import { PedidoIncludeObjectSchema as PedidoIncludeObjectSchema } from './objects/PedidoInclude.schema';
import { PedidoUpdateInputObjectSchema as PedidoUpdateInputObjectSchema } from './objects/PedidoUpdateInput.schema';
import { PedidoUncheckedUpdateInputObjectSchema as PedidoUncheckedUpdateInputObjectSchema } from './objects/PedidoUncheckedUpdateInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';

export const PedidoUpdateOneSchema: z.ZodType<Prisma.PedidoUpdateArgs> = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), data: z.union([PedidoUpdateInputObjectSchema, PedidoUncheckedUpdateInputObjectSchema]), where: PedidoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PedidoUpdateArgs>;

export const PedidoUpdateOneZodSchema = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), data: z.union([PedidoUpdateInputObjectSchema, PedidoUncheckedUpdateInputObjectSchema]), where: PedidoWhereUniqueInputObjectSchema }).strict();