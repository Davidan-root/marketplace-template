import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoItemCreateManyInputObjectSchema as PedidoItemCreateManyInputObjectSchema } from './objects/PedidoItemCreateManyInput.schema';

export const PedidoItemCreateManySchema: z.ZodType<Prisma.PedidoItemCreateManyArgs> = z.object({ data: z.union([ PedidoItemCreateManyInputObjectSchema, z.array(PedidoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PedidoItemCreateManyArgs>;

export const PedidoItemCreateManyZodSchema = z.object({ data: z.union([ PedidoItemCreateManyInputObjectSchema, z.array(PedidoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();