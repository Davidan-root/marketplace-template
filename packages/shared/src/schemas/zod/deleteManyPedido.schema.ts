import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';

export const PedidoDeleteManySchema: z.ZodType<Prisma.PedidoDeleteManyArgs> = z.object({ where: PedidoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PedidoDeleteManyArgs>;

export const PedidoDeleteManyZodSchema = z.object({ where: PedidoWhereInputObjectSchema.optional() }).strict();