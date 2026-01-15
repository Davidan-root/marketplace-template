import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoSelectObjectSchema as PedidoSelectObjectSchema } from './objects/PedidoSelect.schema';
import { PedidoIncludeObjectSchema as PedidoIncludeObjectSchema } from './objects/PedidoInclude.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';
import { PedidoCreateInputObjectSchema as PedidoCreateInputObjectSchema } from './objects/PedidoCreateInput.schema';
import { PedidoUncheckedCreateInputObjectSchema as PedidoUncheckedCreateInputObjectSchema } from './objects/PedidoUncheckedCreateInput.schema';
import { PedidoUpdateInputObjectSchema as PedidoUpdateInputObjectSchema } from './objects/PedidoUpdateInput.schema';
import { PedidoUncheckedUpdateInputObjectSchema as PedidoUncheckedUpdateInputObjectSchema } from './objects/PedidoUncheckedUpdateInput.schema';

export const PedidoUpsertOneSchema: z.ZodType<Prisma.PedidoUpsertArgs> = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), where: PedidoWhereUniqueInputObjectSchema, create: z.union([ PedidoCreateInputObjectSchema, PedidoUncheckedCreateInputObjectSchema ]), update: z.union([ PedidoUpdateInputObjectSchema, PedidoUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PedidoUpsertArgs>;

export const PedidoUpsertOneZodSchema = z.object({ select: PedidoSelectObjectSchema.optional(), include: PedidoIncludeObjectSchema.optional(), where: PedidoWhereUniqueInputObjectSchema, create: z.union([ PedidoCreateInputObjectSchema, PedidoUncheckedCreateInputObjectSchema ]), update: z.union([ PedidoUpdateInputObjectSchema, PedidoUncheckedUpdateInputObjectSchema ]) }).strict();