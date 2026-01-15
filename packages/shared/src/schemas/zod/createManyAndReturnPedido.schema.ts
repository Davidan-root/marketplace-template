import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './objects/PedidoSelect.schema';
import { PedidoCreateManyInputObjectSchema as PedidoCreateManyInputObjectSchema } from './objects/PedidoCreateManyInput.schema';

export const PedidoCreateManyAndReturnSchema: z.ZodType<Prisma.PedidoCreateManyAndReturnArgs> = z.object({ select: PedidoSelectObjectSchema.optional(), data: z.union([ PedidoCreateManyInputObjectSchema, z.array(PedidoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PedidoCreateManyAndReturnArgs>;

export const PedidoCreateManyAndReturnZodSchema = z.object({ select: PedidoSelectObjectSchema.optional(), data: z.union([ PedidoCreateManyInputObjectSchema, z.array(PedidoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();