import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoUpdateManyMutationInputObjectSchema as PedidoUpdateManyMutationInputObjectSchema } from './objects/PedidoUpdateManyMutationInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';

export const PedidoUpdateManySchema: z.ZodType<Prisma.PedidoUpdateManyArgs> = z.object({ data: PedidoUpdateManyMutationInputObjectSchema, where: PedidoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PedidoUpdateManyArgs>;

export const PedidoUpdateManyZodSchema = z.object({ data: PedidoUpdateManyMutationInputObjectSchema, where: PedidoWhereInputObjectSchema.optional() }).strict();