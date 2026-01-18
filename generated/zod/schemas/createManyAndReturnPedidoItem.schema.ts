import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoItemSelectObjectSchema as PedidoItemSelectObjectSchema } from './objects/PedidoItemSelect.schema';
import { PedidoItemCreateManyInputObjectSchema as PedidoItemCreateManyInputObjectSchema } from './objects/PedidoItemCreateManyInput.schema';

export const PedidoItemCreateManyAndReturnSchema: z.ZodType<Prisma.PedidoItemCreateManyAndReturnArgs> = z.object({ select: PedidoItemSelectObjectSchema.optional(), data: z.union([ PedidoItemCreateManyInputObjectSchema, z.array(PedidoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PedidoItemCreateManyAndReturnArgs>;

export const PedidoItemCreateManyAndReturnZodSchema = z.object({ select: PedidoItemSelectObjectSchema.optional(), data: z.union([ PedidoItemCreateManyInputObjectSchema, z.array(PedidoItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();