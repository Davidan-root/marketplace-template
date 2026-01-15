import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoCreateManyInputObjectSchema as PedidoCreateManyInputObjectSchema } from './objects/PedidoCreateManyInput.schema';

export const PedidoCreateManySchema: z.ZodType<Prisma.PedidoCreateManyArgs> = z.object({ data: z.union([ PedidoCreateManyInputObjectSchema, z.array(PedidoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PedidoCreateManyArgs>;

export const PedidoCreateManyZodSchema = z.object({ data: z.union([ PedidoCreateManyInputObjectSchema, z.array(PedidoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();