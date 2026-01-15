import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './objects/PedidoItemSelect.schema';
import { PedidoItemUpdateManyMutationInputObjectSchema as PedidoItemUpdateManyMutationInputObjectSchema } from './objects/PedidoItemUpdateManyMutationInput.schema';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './objects/PedidoItemWhereInput.schema';

export const PedidoItemUpdateManyAndReturnSchema: z.ZodType<Prisma.PedidoItemUpdateManyAndReturnArgs> = z.object({ select: PedidoItemSelectObjectSchema.optional(), data: PedidoItemUpdateManyMutationInputObjectSchema, where: PedidoItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PedidoItemUpdateManyAndReturnArgs>;

export const PedidoItemUpdateManyAndReturnZodSchema = z.object({ select: PedidoItemSelectObjectSchema.optional(), data: PedidoItemUpdateManyMutationInputObjectSchema, where: PedidoItemWhereInputObjectSchema.optional() }).strict();