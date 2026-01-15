import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './objects/PedidoItemWhereInput.schema';

export const PedidoItemDeleteManySchema: z.ZodType<Prisma.PedidoItemDeleteManyArgs> = z.object({ where: PedidoItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PedidoItemDeleteManyArgs>;

export const PedidoItemDeleteManyZodSchema = z.object({ where: PedidoItemWhereInputObjectSchema.optional() }).strict();