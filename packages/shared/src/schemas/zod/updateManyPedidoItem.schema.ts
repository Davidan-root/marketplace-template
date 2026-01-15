import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoItemUpdateManyMutationInputObjectSchema as PedidoItemUpdateManyMutationInputObjectSchema } from './objects/PedidoItemUpdateManyMutationInput.schema';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './objects/PedidoItemWhereInput.schema';

export const PedidoItemUpdateManySchema: z.ZodType<Prisma.PedidoItemUpdateManyArgs> = z.object({ data: PedidoItemUpdateManyMutationInputObjectSchema, where: PedidoItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PedidoItemUpdateManyArgs>;

export const PedidoItemUpdateManyZodSchema = z.object({ data: PedidoItemUpdateManyMutationInputObjectSchema, where: PedidoItemWhereInputObjectSchema.optional() }).strict();