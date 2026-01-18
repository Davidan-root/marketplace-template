import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './objects/PedidoSelect.schema';
import { PedidoUpdateManyMutationInputObjectSchema as PedidoUpdateManyMutationInputObjectSchema } from './objects/PedidoUpdateManyMutationInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';

export const PedidoUpdateManyAndReturnSchema: z.ZodType<Prisma.PedidoUpdateManyAndReturnArgs> = z.object({ select: PedidoSelectObjectSchema.optional(), data: PedidoUpdateManyMutationInputObjectSchema, where: PedidoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PedidoUpdateManyAndReturnArgs>;

export const PedidoUpdateManyAndReturnZodSchema = z.object({ select: PedidoSelectObjectSchema.optional(), data: PedidoUpdateManyMutationInputObjectSchema, where: PedidoWhereInputObjectSchema.optional() }).strict();